import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses({ onAddExpense }) {
  const submitDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitDataHandler} />
    </div>
  );
}

export default NewExpenses;
