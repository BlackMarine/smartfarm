import React from "react";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container-fluid px-5" style={{backgroundColor:"black",color:"black"}}>
        <div ClassName="container" style={{color:"red"}}>
          <div style={{right:"2px"}}>asdas</div>
        </div>
        blackBar
      </div>
      <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top">
          <img style={{width:"100%"}} src="img/a_logo.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MobileTap
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">

            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#features">
                회사 소개
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#download">
                주요사업
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#download">
                제품
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#download">
                커뮤니티
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
