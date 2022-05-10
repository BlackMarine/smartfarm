import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styleNav.css";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(0);
  const [isTapClick01, setIsTapClick01] = useState(false);
  const [isTapClick02, setIsTapClick02] = useState(false);
  const [isTapClick03, setIsTapClick03] = useState(false);
  const [isTapClick04, setIsTapClick04] = useState(false);
  const isMobileTap = useMediaQuery({ query: "(max-width: 991px)" });

  useEffect(() => {
    return () => {};
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "black", color: "black" }}
      >
        <div className="container" style={{ color: "red" }}>
          <div style={{ right: "2px" }}>asdas</div>
        </div>
        blackBar
      </div>

      <div
        className="container px-5"
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
      >
        <a className="navbar-brand fw-bold" href="#page-top">
          <img style={{ width: "100%" }} src="img/a_logo.png"></img>
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
            <li className="nav-item title-width">
              <a className="nav-link" href="#features">
                <div
                  onClick={() => {
                    setIsTapClick01(!isTapClick01);
                  }}
                >
                  회사소개
                </div>
              </a>
              {isTapClick01 && (
                <div>
                  <div className="item-font">CEO 인사말</div>
                  <div className="item-font">회사연혁</div>
                  <div className="item-font">조직도</div>
                  <div className="item-font">인증내역</div>
                  <div className="item-font">오시는길</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    setIsTapClick02(!isTapClick02);
                  }}
                >
                  주요사업
                </div>
              </a>
              {isTapClick02 && (
                <div>
                  <div className="item-font">우리사업</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    setIsTapClick03(!isTapClick03);
                  }}
                >
                  제품소개
                </div>
              </a>
              {isTapClick03 && (
                <div>
                  <div className="item-font">제품1</div>
                  <div className="item-font">제품2</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    setIsTapClick04(!isTapClick04);
                  }}
                >
                  커뮤니티
                </div>
              </a>
              {isTapClick04 && (
                <div>
                  <div className="item-font">공지사항</div>
                  <div className="item-font">설치사례</div>
                  <div className="item-font">자료실</div>
                  <div className="item-font">제품사용매뉴얼</div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {isHovering && !isMobileTap ? (
        <div
          className="container px-5"
          onMouseOver={() => setIsHovering(1)}
          onMouseOut={() => setIsHovering(0)}
        >
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item item-width">
                <a className="nav-link" href="#features">
                  <div className="item-font">CEO 인사말</div>
                </a>
                <a className="nav-link" href="#features">
                  <div className="item-font">회사연혁</div>
                </a>
                <a className="nav-link" href="#features">
                  <div className="item-font">조직도</div>
                </a>
                <a className="nav-link" href="#features">
                  <div className="item-font">인증내역</div>
                </a>
                <a className="nav-link" href="#features">
                  <div className="item-font">오시는길</div>
                </a>
              </li>

              <li className="nav-item item-width">
                <a className="nav-link" href="#download">
                  <div className="item-font">우리사업</div>
                </a>
              </li>

              <li className="nav-item item-width">
                <a className="nav-link" href="#download">
                  <div className="item-font">제품1</div>
                </a>
                <a className="nav-link" href="#download">
                  <div className="item-font">제품2</div>
                </a>
              </li>

              <li className="nav-item item-width">
                <a className="nav-link" href="#download">
                  <div className="item-font">공지사항</div>
                </a>
                <a className="nav-link" href="#download">
                  <div className="item-font">설치사례</div>
                </a>
                <a className="nav-link" href="#download">
                  <div className="item-font">자료실</div>
                </a>
                <a className="nav-link" href="#download">
                  <div className="item-font">제품사용매뉴얼</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
    
  );
};

export default Nav;
