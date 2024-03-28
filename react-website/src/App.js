import logo from "./logo.svg";
import "./App.css";
import DarkNavbar from "./Components/DarkNavbar/DarkNavbar";
import Container from "react-bootstrap/Container"; /*Boostrap*/
import Nav from "react-bootstrap/Nav"; /*Boostrap*/
import Navbar from "react-bootstrap/Navbar"; /*Boostrap*/
import UXCreditCalculatorCost from "./Components/UXCreditCalculatorCost/UXCreditCalculatorCost";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <UXCreditCalculatorCost/>
    </div>
  );
}

export default App;
