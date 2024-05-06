import Header from "./components/Header";
import { useState } from "react";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handlechange(inputIdentifier, newValue) {
    setUserInput((prevuserInput) => {
      return {
        ...prevuserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handlechange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero 🤦‍♂️</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
