from collections import defaultdict
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ChromeOptions
import json
from bs4 import BeautifulSoup as bs4


# Set selenium as headless for speed and efficeincy
options = ChromeOptions()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)

# Get the list of all possible countries/regions/cities for scraping
url = "https://carbonpricingdashboard.worldbank.org/compliance/factsheets"
driver.get(url)
select_element = driver.find_element(By.ID, "instruments")
instruments = select_element.find_elements(By.TAG_NAME, "option")
instruments = [option.get_attribute("value") for option in instruments]

# Initializing the dictionary to later write into json
jason = []

# Going through all the values
for val in instruments:
    instrument_url = f"https://carbonpricingdashboard.worldbank.org/compliance/factsheets?instrument={val}"
    driver.get(instrument_url)

    # Getting the html of the page after it gets loaded so we have access to the dynamicly generated components
    r = driver.page_source

    # Checking wether the current country/region/city implements a carbon emmision mechanism
    soup = bs4(r, "html.parser")
    try:
        price_desc = soup.find("div", {"class": "price_desc"}).get_text()
    except:
        continue
    if not price_desc:
        continue

    # Finding all the other relevant information  on the page's parsed html
    type_ = soup.find("span", {"class": "type"}).get_text()
    status = soup.find("span", {"class": "status"}).get_text()
    jurisdiction_covered = soup.find(
        "span", {"class": "jurisdiction_covered"}
    ).get_text()
    allocation = soup.find("span", {"class": "allocation"}).get_text()
    price_setting = soup.find("span", {"class": "price_settings"}).get_text()
    covered_gasses = soup.find("span", {"class": "covered_gases"}).get_text()
    covered_fuels = soup.find("span", {"class": "covered_fuels"}).get_text()
    # pricing_allocation_approaches = soup.find(
    #   "span", {"class": "pricing_allocation_approaches"}
    # ).get_text()
    price_change = soup.find("div", {"class": "price_change"}).get_text()
    price_range = soup.find("span", {"class": "price_range"}).get_text()

    # If exists turn price into float of dollar version
    if price_desc and "available" not in price_desc:
        print(price_desc)
        temp = price_desc[: price_desc.rfind(")")].split("(")
        print(temp)
        price_desc = float(temp[-1][3:])
        print(price_desc)

    # Saving all the information on a dictionary to later write to json
    temp = {
        "name": val,
        "type": type_,
        "status": status,
        "jurisdiction_covered": jurisdiction_covered,
        "allocation": allocation,
        "price_setting": price_setting,
        "covered_gasses": covered_gasses,
        "covered_fuels": covered_fuels,
        # "pricing_allocation_approaches": pricing_allocation_approaches,
        "price_desc": price_desc,
        "price_change": price_change,
    }

    print(f"Completed {jurisdiction_covered}-{val}")

    jason.append(temp)

print("Writing json")


# Writing to json
with open("data.json", "w") as json_file:
    json.dump(jason, json_file, indent=4)

print("Completed")
