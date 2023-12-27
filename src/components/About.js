import React, { useState } from "react";

export default function About() {
  var dark;

  const [myStyle, setMyStyle] = useState({
    textAlign:"center",
    height:"100%",
    width:"100%",
    background: "white",
    color: "black",
  });
  const [mybtn, setMybtn] = useState("Turn On Dark Mode");
  const toggleTheme = () => {
    if (myStyle.background === "white") {
      setMyStyle({
        textAlign:"center",
        width:"100%",
        height:"100vh",
        background: "black",
        color: "white",
      });
      setMybtn("Turn On Light Mode");
    } else {
      setMyStyle({
        textAlign:"center",
        width:"100%",
        height:"100vh",
        background: "white",
        color: "black",
      });
      setMybtn("Turn On Dark Mode");
    }
  };

  let light = {
    display: "none",
  };

  return (
    <div className="" style={myStyle}>
      <h1>Text-Utils</h1>
      <div>
        <b>
          <p>
            Text utils is a mini project made by Mr. Rakshith R it handles all
            kind of text manipulation such as convert text to lowercase,
            UpperCase, Sentence Case, count number of words, characters, how
            long does it takes to read complete text and many more. feel free to
            connect with me +919739198164 , rakshithjogihalli@gmail.com
          </p>
        </b>
      </div>
      <div className="text-center my-5">
        <button className="btn btn-dark" id="mybtn1" onClick={toggleTheme}>
          {mybtn}
        </button>
      </div>
    </div>
  );
}
