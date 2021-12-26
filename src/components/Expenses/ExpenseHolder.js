import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import Card from "../Cards/Card";
import "./Expenses.css";
import Filter from "./Filter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function ExpenseHolder(props) {
  //console.log("setting state");
  let [state, setState] = useState("2020");
  const fetchFilter = (filterObj) => {
    setState(filterObj);
  };
  const filterByDateArr = props.ExpenseItems.filter((expenseItem) => {
    return expenseItem.date.getFullYear() == state;
  });
  return (
    <div>
      <Card>
        <div className="expenses">
          <Filter onFilter={fetchFilter} selected={state}></Filter>
          <ExpensesChart expenses={filterByDateArr}></ExpensesChart>
          <ExpensesList itemList={filterByDateArr}></ExpensesList>
          {/* <ExpenseItem
            heading={props.ExpenseItems[0].heading}
            price={props.ExpenseItems[0].price}
            date={props.date}
          ></ExpenseItem>
          <ExpenseItem
            heading={props.ExpenseItems[1].heading}
            price={props.ExpenseItems[1].price}
            date={props.date}
          ></ExpenseItem>
          <ExpenseItem
            heading={props.ExpenseItems[1].heading}
            price={props.ExpenseItems[1].price}
            date={props.date}
          ></ExpenseItem>
          <ExpenseItem
            heading={props.ExpenseItems[1].heading}
            price={props.ExpenseItems[1].price}
            date={props.date}
          ></ExpenseItem> */}
        </div>
      </Card>
    </div>
  );
}

export default ExpenseHolder;
