import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>About this site</h4>
        <div style={{ fontSize: "20px" }}>
          A Global Covid-19 Live Tracker app developed in React, makes use of <a href="https://corona.lmao.ninja" target="_blank"> corona.lmao.ninja </a>API. It offers live global covid-19 stats, and also individual countries stats. created by <a href="https://giftmbanda.com/" target="_blank"> Gift Banda </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
