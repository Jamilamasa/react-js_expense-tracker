import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  function addExpenseHandler(expense) {
    setExpenses((prevExpense) => [expense, ...prevExpense]);
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
