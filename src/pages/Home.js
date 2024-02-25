// import "../custom.css";
import "../index.css";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Calculatorsb from "../components/Calculatorsb";

function Home() {
  return (
    <div className="h-screen bg-darkFG dark:bg-darkBG dark:text-darkFG">
      <Helmet>
        <title>PSCalc | Home</title>
      </Helmet>
      <Header />
      <Calculatorsb />
      {/* <h1 className="text-3xl font-bold text-center underline">
        Welcome to the Homepage
      </h1>
      

      <div className="calcBtnList border-x-4 border-y-4 border-amber-300">
        <button className="Button font-extrabold border-gray-900 border-solid border-x-2 border-y-2">
          Button
        </button>
        <button className="Button font-extrabold border-gray-900 border-solid border-x-2 border-y-2">
          Button
        </button>
        <button className="Button font-extrabold border-gray-900 border-solid border-x-2 border-y-2">
          Button
        </button>
      </div> */}
    </div>
  );
}

export default Home;
