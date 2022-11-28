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

  //display message if no eexpenses for selected year
  // may way to do it with ternary operator or &&

  let expensesContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        //when displaying multiple items use a unique identifier
        //with key={unique identifier}
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangeHandler}
          selected={filteredYear}
        />

        {expensesContent}
        {/* USING TERNARY */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No Exp</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              //when displaying multiple items use a unique identifier
              //with key={unique identifier}
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* USING && */}

        {/* {filteredExpenses.length === 0 && <p>No Exp</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              //when displaying multiple items use a unique identifier
              //with key={unique identifier}
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
