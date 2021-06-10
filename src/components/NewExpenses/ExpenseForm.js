import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  // const titleChangeHandler = (e) => {
  //   e.preventDefault();
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: e.target.value,
  //   }); // for using useState as one
  // };

  const amountChangeHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSubmitExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.1"
              step="1.0"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
