import "./ExpenseItemCss.css";
import "./ExpenseItemDate";
import React, { useState } from "react";
import ExpenseItemDate from "./ExpenseItemDate";
function ExpenseItem(props) {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.getFullYear();
  //const [state, setState] = useState(props.heading);
  return (
    <div className="expense-item">
      <ExpenseItemDate day={day} month={month} year={year}></ExpenseItemDate>
      <div className="expense-item__description">
        <div>
          <h2>{props.heading}</h2>
        </div>
        <div className="expense-item__price">
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
