import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      {/* Other content */}
      <FloatingNavbar>
        {/* Navbar items go here */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </FloatingNavbar>
    </div>
  );
}

export default App;
