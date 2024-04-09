import "./App.css";
import Container from "react-bootstrap/Container"; /*Boostrap*/
import Nav from "react-bootstrap/Nav"; /*Boostrap*/
import Navbar from "react-bootstrap/Navbar"; /*Boostrap*/
import ParallaxComponent from "./Components/ParallaxComponent/ParallaxComponent";
import sofroimg from "./sofro-god2.jpg";
import SearchBar from "./Components/CarSearchBar/carsearchbar";
import UXCreditCalculatorCost from "./Components/UXCreditCalculatorCost/UXCreditCalculatorCost";
import Newsletter from "./Components/NewsLetter/Newsletter";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ParallaxComponent></ParallaxComponent>
      <div className="summary-section">
        <Container>
          <div className="summary-content">
            <div className="summary-text">
              <h2>Summary</h2>
              <p>
                Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD
                Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD
                Sofro GOD Sofro GOD Sofro GOD
              </p>
              {/* Add more content here */}
            </div>
            <div className="summary-photo">
              <img src={sofroimg} alt="Summary" />
              <p className="caption">Photo caption goes here</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="about-section">
        <Container>
          <h2>About Us</h2>
          <p>
            Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro
            GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD Sofro GOD
            Sofro GOD Sofro GOD
          </p>
          {/* Add more content here */}
        </Container>
      </div>
      <SearchBar></SearchBar>
      <UXCreditCalculatorCost/>
      <Newsletter/>
    </div>
  );
}

export default App;
