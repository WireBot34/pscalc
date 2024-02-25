import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";


function Projects() {
  return (
    <div>
      <Helmet>
        <title>PSCalc | Projects</title>
      </Helmet>
      <Header />
      <h1>Projects Page</h1>
      <p>This is the Projects page content.</p>
    </div>
  );
}

export default Projects;
