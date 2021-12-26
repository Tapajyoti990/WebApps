import logo from "./logo.svg";
import "./App.css";
import ExpenseHolder from "./components/Expenses/ExpenseHolder";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const date = new Date();
const ExpenseItems = [
  {
    ID: 65,
    heading: "first Heading",
    price: 224.9,
    date: date,
  },
  {
    ID: 45,
    heading: "second Heading",
    price: 568,
    date: date,
  },
];
function App() {
  const [expenseItems, expenseState] = useState(ExpenseItems);
  console.log("app data");
  const fetchExpenseData = (expenseData) => {
    console.log("function app data");
    expenseState((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
    console.log("function app data ends");
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onExpense={fetchExpenseData}></NewExpense>
        <ExpenseHolder ExpenseItems={expenseItems}></ExpenseHolder>
      </header>
    </div>
  );
}

export default App;
