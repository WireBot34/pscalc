import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";


function Contact() {
  return (
    <div className="h-screen bg-darkFG dark:bg-darkBG dark:text-darkFG">
      <Helmet>
        <title>PSCalc | Contact</title>
      </Helmet>
      <Header />

      <h1>Contact Page</h1>
      <p>This is the Contact page content.</p>
    </div>
  );
}

export default Contact;
