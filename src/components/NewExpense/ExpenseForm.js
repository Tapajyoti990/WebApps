import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [toggleView, setToggleView] = useState("");
  console.log("Form data");
  const titleChangeHandler = (event) => {
    // setState({ ...state, enteredTitle: event.target.value });
    // setState((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // setState({ ...state, enteredAmount: event.target.value });
    // setState((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setState({ ...state, enteredDate: event.target.value });
    // setState((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    setDate(event.target.value);
  };
  const handleSubmission = (event) => {
    console.log("Function form data");
    event.preventDefault();
    props.hideForm();
    const expenseData = {
      ID: Math.ceil(Math.random(1134)),
      heading: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSubmitForm(expenseData);
    console.log("function Form Data Ends");
  };
  const cancelForm = () => {
    props.hideForm();
  };
  return (
    <form onSubmit={handleSubmission}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
