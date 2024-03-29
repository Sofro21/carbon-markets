import "./App.css";
import Container from "react-bootstrap/Container"; /*Boostrap*/
import Nav from "react-bootstrap/Nav"; /*Boostrap*/
import Navbar from "react-bootstrap/Navbar"; /*Boostrap*/
import ParallaxComponent from "./Components/ParallaxComponent/ParallaxComponent";

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
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
      <h1>Sofro God</h1>
    </div>
  );
}

export default App;
