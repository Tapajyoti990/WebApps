import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log("Expenses Chart");
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log("chartDataPoints are " + chartDataPoints[0].label);
  for (let expense of props.expenses) {
    let expenseMonth = expense.date.getMonth(); //Jan => 0
    chartDataPoints[expenseMonth].value += expense.price;
  }
  console.log("chartDataPoints after for " + chartDataPoints[0].label);
  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
