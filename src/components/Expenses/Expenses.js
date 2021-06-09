import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          sYear={filteredYear}
          onSubmitYearSelector={selectYearHandler}
        ></ExpenseFilter>
        <h2>Let's get started!</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </>
  );
}

export default Expenses;
