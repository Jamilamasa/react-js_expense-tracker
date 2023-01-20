import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2022");
  function filterDateHandler(filteredDate) {
    setFilteredDate(filteredDate);
  }

  const expenses = props.expenses;
  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredDate
  );

  
  return (
    <Card className="expenses">
      <ExpensesFilter value={filteredDate} onFilterDate={filterDateHandler} />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
}

export default Expenses;
