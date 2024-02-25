import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div>
      <Helmet>
        <title>PSCalc | About</title>
      </Helmet>
      <Header />
      <h1>About Page</h1>
      <p>This is the About page content.</p>

      <h3>Social Follow</h3>

      {/* <a href="https://www.twitter.com/wirebot34" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/wirebot34"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a> */}
    </div>
  );
}

export default About;
