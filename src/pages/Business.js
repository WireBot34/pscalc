import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";


function Business() {
  return (
    <div>
      <Helmet>
        <title>PSCalc | Business</title>
      </Helmet>
      <Header />

      <h1>Business Page</h1>
      <p>This is the Business page content.</p>
    </div>
  );
}

export default Business;
