import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  //Expenses array copied from a Udemy
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Xbox SX",
      amount: 499.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "MSI Laptop",
      amount: 999,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenses = (expense) => {
    console.log("In App JS");
    console.log(expense);
  };

  //underthehoodcode
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <Expenses expenses={expenses} />
      {/* the first "expenses" is to be used as a variable name (if direct) second one is the variable present in the file the object "expenses"  */}
      <NewExpenses onAddExpense={addExpenses} />
      {/* onAddExpense is a function pointer which is passed as an argument */}
    </div>
  );
}

export default App;
