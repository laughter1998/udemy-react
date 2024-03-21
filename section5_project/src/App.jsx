import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { calculateInvestmentResults } from "./util/investment.js";
const initialInvestment = 15000;
const annualInvestment = 900;
const expectedReturn = 10;
const duration = 2;
const aaa = calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
});
// console.log(aaa);

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <Result />
    </>
  );
}

export default App;
