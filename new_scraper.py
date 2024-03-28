from collections import defaultdict
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ChromeOptions
import json
from bs4 import BeautifulSoup as bs4
from multiprocessing import Pool


def scrape_data(val):
    # Make chrome headless
    options = ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)

    instrument_url = f"https://carbonpricingdashboard.worldbank.org/compliance/factsheets?instrument={val}"
    driver.get(instrument_url)

    r = driver.page_source
    soup = bs4(r, "html.parser")
    # Check if price_desc exists and stop the process otherwise
    try:
        price_desc = soup.find("div", {"class": "price_desc"}).get_text()
    except:
        driver.quit()
        return None

    if not price_desc:
        driver.quit()
        return None

    # Get all the other relevant in
    type_ = soup.find("span", {"class": "type"}).get_text()
    status = soup.find("span", {"class": "status"}).get_text()
    jurisdiction_covered = soup.find(
        "span", {"class": "jurisdiction_covered"}
    ).get_text()
    allocation = soup.find("span", {"class": "allocation"}).get_text()
    price_setting = soup.find("span", {"class": "price_settings"}).get_text()
    covered_gasses = soup.find("span", {"class": "covered_gases"}).get_text()
    covered_fuels = soup.find("span", {"class": "covered_fuels"}).get_text()
    price_change = soup.find("div", {"class": "price_change"}).get_text()

    # Turn price_desc if it is a numerical (Dollar)
    if "available" not in price_desc:
        temp = price_desc[: price_desc.rfind(")")].split("(")
        price_desc = float(temp[-1][3:])

    # Save everything in a dict to later write to json
    temp = {
        "name": val,
        "type": type_,
        "status": status,
        "jurisdiction_covered": jurisdiction_covered,
        "allocation": allocation,
        "price_setting": price_setting,
        "covered_gasses": covered_gasses,
        "covered_fuels": covered_fuels,
        "price_desc": price_desc,
        "price_change": price_change,
    }

    print(f"Completed {jurisdiction_covered}-{val}")
    driver.quit()
    return temp


if __name__ == "__main__":
    # Get the list of possible regions for information
    url = "https://carbonpricingdashboard.worldbank.org/compliance/factsheets"
    options = ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    select_element = driver.find_element(By.ID, "instruments")
    instruments = select_element.find_elements(By.TAG_NAME, "option")
    instruments = [option.get_attribute("value") for option in instruments]

    # Using multiprocessing Pool to scrape data in parallel
    with Pool() as pool:
        results = pool.map(scrape_data, instruments)

    jason = [result for result in results if result is not None]

    # Write the json
    print("Writing json")
    with open("UXCreditCalculatorCost/data.json", "w") as json_file:
        json.dump(jason, json_file, indent=4)

    print("Completed")
