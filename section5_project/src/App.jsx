import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, vewValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +vewValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} user={userInput} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && <p className="center">기간을 다시 입력하세요</p>}
    </>
  );
}

export default App;
