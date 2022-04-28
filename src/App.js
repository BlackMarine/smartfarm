import React from "react";
import Nav from './components/nav/Nav.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Section1 from './components/section1/Section1.js';
import Section2 from './components/section2/Section2.js';
import Section3 from './components/section3/Section3.js';
import Section4 from './components/section4/Section4.js';
import Section5 from './components/section5/Section5.js';

function App() {
  return (
    <div>
      <Potato />
      <Nav />
      <Header />
      <Section1 />
      <Section1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

function Potato() {
  return <div style={{height: "72.25px"}}></div>;
}

export default App;