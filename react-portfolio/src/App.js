import React from "react";
import './App.css';
import Nav from "./components/nav"
import Header from './components/header'
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact";
import Footer from "./components/footer"



function App() {
  return (
    <main>
      <Nav id="li"/>
       <Header/>
      <About id="about"></About>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </main>
  );
}


export default App;
