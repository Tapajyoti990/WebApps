import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [toggler, setToggler] = useState(false);
  console.log("Inside Expense.js");

  let expenseFormData = {};
  const fetchData = (formData) => {
    expenseFormData = { ...formData };
    console.log("function expense data");
    props.onExpense(expenseFormData);
    console.log("function expense data ends");
  };
  const openForm = () => {
    setToggler(true);
  };

  const hideForm = () => {
    setToggler(false);
  };
  //console.log("woohoo");

  return (
    <div className="new-expense">
      {toggler == false ? (
        <button onClick={openForm}>Add new Expense</button>
      ) : (
        <ExpenseForm hideForm={hideForm} onSubmitForm={fetchData} />
      )}
    </div>
  );
};

export default NewExpense;
