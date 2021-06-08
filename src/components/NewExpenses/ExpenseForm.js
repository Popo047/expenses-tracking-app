import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

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
      ftitle: title,
      famount: amount,
      fdate: new Date(date),
    };
    // console.log(expenseData);
    props.onSubmitExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
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
            max="2022-01-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
