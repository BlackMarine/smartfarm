import React, { useState } from "react";

import Nav from './components/nav/Nav.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Section1 from './components/section1/Section1.js';
import Section2 from './components/section2/Section2.js';
import Section3 from './components/section3/Section3.js';
import Section4 from './components/section4/Section4.js';
import Section5 from './components/section5/Section5.js';

import M_section1 from "./components/mobile/m_section1.js";

import { useMediaQuery } from 'react-responsive'

function App() {
  let [a, setText] = useState('qwe');

  const isDesktop = useMediaQuery({ query: '(min-width: 575px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' })

  return (
    <div>

      {isDesktop &&
        <div>
          <Potato />
          {a}
          <button onClick={() => { setText("qwe") }}></button>
          <Nav />
          <Section1 />
          <Header />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer />
        </div>}

      {isMobile &&
        <div>
          You are a mobile phone
          <Potato />
          <Nav />
          <M_section1 />
        </div>}

    </div>
  );
}

function Potato() {
  return <div style={{ height: "72.25px" }}></div>;
}

export default App;