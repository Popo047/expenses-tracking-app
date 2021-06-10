import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [show, setShow] = useState(false);
  const submitDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const handleAddClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="new-expense">
        {show ? (
          <>
            <ExpenseForm onSubmitExpenseData={submitDataHandler} />
            <button onClick={handleAddClick}>Cancel</button>
          </>
        ) : (
          <button onClick={handleAddClick}>Add Expense</button>
        )}
      </div>
    </>
  );
};

export default NewExpenses;
