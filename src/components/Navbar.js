import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ style }) {
  const pages = [
    { text: "Home", src: "/" },
    { text: "Map", src: "/Map" },
  ];

  return (
    <div id="nav" style={style}>
      <Link id="anav" to="/">
        <div id="logo">
          <img
            id="pic1d"
            src="https://www.nicepng.com/png/full/52-527751_pics-for-chart-icon-black-and-white-png.png"
            width="37px"
            height="40px"
          ></img>
          <h3>RentShift</h3>
        </div>
      </Link>
      <div id="dropmenu" style={{ fontSize: "40px", display: "none" }}>
        &#x2193;
      </div>
      <div id="pages">
        <ul id="choosePage">
          {pages.map((page, index) => {
            return (
              <Link
                className={page.text}
                style={{ color: "white", textDecoration: "none" }}
                to={page.src}
              >
                <li key={index}>{page.text}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
