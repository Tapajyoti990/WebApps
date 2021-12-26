import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.itemList.length !== 0) {
    return (
      <ul className="expenses-list">
        {" "}
        {props.itemList.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.ID}
              heading={expenseItem.heading}
              price={expenseItem.price}
              date={expenseItem.date}
            ></ExpenseItem>
          );
        })}
      </ul>
    );
  }

  return <h2 className="expenses-list__fallback">Found no expenses</h2>;
};

export default ExpensesList;
