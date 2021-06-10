import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
      ? true
      : false;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          sYear={filteredYear}
          onSubmitYearSelector={selectYearHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
