import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";

import InputGroup from "./inputGroup";

let initialInvestment, annualInvestment, expectedReturn, duration;

function handleNumberChange1(a = 0) {
  console.log(a);
  return a;
}

export default function UserInput() {
  const aaa = calculateInvestmentResults({
    initialInvestment: handleNumberChange1(),
    annualInvestment,
    expectedReturn,
    duration,
  });
  console.log(aaa);
  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroup
          initail={(initialInvestment = 0)}
          onChangeNumber={handleNumberChange1}
        >
          INITIAL INVESTMENT
        </InputGroup>
        <InputGroup initail={(annualInvestment = 0)}>
          ANNUAL INVESTMENT
        </InputGroup>

        {/* <label>
          INITIAL INVESTMENT
          <input type="text" value={initail} onChange={handleInputChange} />
        </label> */}
        {/* <label>
          ANNUAL INVESTMENT
          <input type="text" />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN
          <input type="text" />
        </label>
        <label>
          DURATION
          <input type="text" />
        </label> */}
      </div>
      <div className="input-group">
        <InputGroup initail={(expectedReturn = 0)}>EXPECTED RETURN</InputGroup>
        <InputGroup initail={(duration = 0)}>DURATION</InputGroup>
      </div>
    </div>
  );
}
