import React from "react";
import Links from "./Links.js";

function About(props) {
  console.log(props.github)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedIn = {props.linkedIn}/>
    </div>
  );
}

export default About;
