import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //display expenses when year filter is used
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangeHandler}
          selected={filteredYear}
        />
        {/* mapping filterd array by year */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            //when displaying multiple items use a unique identifier
            //with key={unique identifier}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
