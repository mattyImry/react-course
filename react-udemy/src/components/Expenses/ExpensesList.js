import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    //display message if no expenses for selected year
    // many way to do it with ternary operator or &&

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    //when displaying multiple items use a unique identifier
                    //with key={unique identifier}
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
            ;
        </ul>
    );
};

{
    /* USING TERNARY */
}

{
    /* {filteredExpenses.length === 0 ? (
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
        )} */
}

{
    /* USING && */
}

{
    /* {filteredExpenses.length === 0 && <p>No Exp</p>}
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
          ))} */
}

export default ExpensesList;
