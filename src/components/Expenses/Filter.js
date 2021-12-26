import "./Filter.css";
const Filter = (props) => {
  //console.log("setting Filter");
  //   const [state, setState] = useState("");
  //   console.log(state);
  //console.log(props.selected);
  const filterByYear = (event) => {
    // console.log(event.target.value);
    let filterObj = event.target.value;
    props.onFilter(filterObj);
  };
  //   const setStateVal = (event) => {
  //     setState(event.target.value);
  //   };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterByYear} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
