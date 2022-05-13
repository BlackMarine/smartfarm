import React, { useState } from "react";

import Nav from './components/nav/Nav.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

import Main from "./components/main/main.js";

import Section2 from './components/section2/Section2.js';
import Section3 from './components/section3/Section3.js';
import Section4 from './components/section4/Section4.js';
import Section5 from './components/section5/Section5.js';
import Product from "./components/product/Product.js";

import M_section1 from "./components/mobile/m_section1.js";

import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const isDesktop = useMediaQuery({ query: '(min-width: 575px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <div>
              {isDesktop &&
                <div>
                  <Potato />
                  <Nav />
                  <Main/>

                  {/* <Section2 />
                  <Section3 />
                  <Section4 />
                  <Section5 /> */}
                  <Footer />
                </div>}

              {isMobile &&
                <div>
                  <Potato />
                  <Nav />
                  <M_section1 />
                  <Footer />
                </div>}
            </div>
          }>
          </Route>

          <Route path="greeting" element={
            <div>
              {isDesktop &&
                <div>
                  <Potato />
                  <Nav />
                  <Section3 />
                  <Footer />
                </div>}

              {isMobile &&
                <div>
                  <Potato />
                  <Nav />
                  <M_section1 />
                  <Footer />
                </div>}
            </div>
          }>
          </Route>

          <Route path="product" element={
            <div>
              {isDesktop &&
                <div>
                  <Potato />
                  <Potato />
                  <Nav />
                  <Footer />
                  <Product />
                </div>}

              {isMobile &&
                <div>
                  <Potato />
                  <Nav />
                  <M_section1 />
                  <Footer />
                </div>}
            </div>
          }>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Potato() {
  return <div style={{ height: "114px", backgroundColor: "gray" }}></div>;
}

export default App;