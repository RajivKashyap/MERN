// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar"
import Todo from './components/Todo/Todo'

export default function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    // mode === 'light' ? setMode('dark') : setMode('light')
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'grey'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
    }
  }
  return (
    <>
      <Todo />
      {/* <Navbar title="TCS" Home="Motorola Solution" About="Blog" Search="Login" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Forms Heading="Text Analyzer tool" mode={mode} />
      </div>
      <About /> */}
    </>
  );
}