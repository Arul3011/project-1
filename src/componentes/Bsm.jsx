import React from "react";
import "./bsm.css";
import { useNavigate } from "react-router-dom";

function Bsm(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="one">
        <h2>Buy Material</h2>
        <p>
          <li> All Waste Trade buyers are fully accredited and certified</li>
          <li> All sellers are fully vetted to ensure accurate listings</li>

          <li> Year-round access to thousands of tonnes of materials</li>
          <li> Filter by precise specifications to find suitable listings</li>
        </p>
        <div className="btn">
          <button
            onClick={() => {
              navigate("/buy");
            }}
          >
            Buy Material
          </button>
        </div>
      </div>
      <div className="two">
        <h2>Sell Material</h2>
        <p>
          <li> Access our global network of verified recycling facilities</li>
          <li> Maximise the value of your waste commodities specifications</li>

          <li>Recycle your materials ethically with full transparency</li>
          <li> A carbon-efficient circular economy for your waste</li>
        </p>
        <div className="btn">
          <button
            onClick={() => {
              navigate("/sell");
            }}
          >
            Sell Material
          </button>
        </div>
      </div>
    </>
  );
}

export default Bsm;
