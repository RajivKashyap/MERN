// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
// import Forms from "./components/Forms";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title={"TCS"} Home="Motorola Solution" About="" Search="Login" />
      {/* <div className="container">
        <Forms Heading="Text Analyzer tool" />
      </div> */}
      <About />
    </>
  );
}

export default App;
