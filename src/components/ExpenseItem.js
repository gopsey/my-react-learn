import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
   const expenses = props.expenses;
   return (
      <>
         <div className="expense-item">
            <ExpenseDate expenses={expenses} />
            <div className="expense-item__description">
               <h2>{expenses?.expenseTitle}</h2>
               <div className="expense-item__price">Rs.{expenses?.expenseAmount}</div>
            </div>
         </div>
      </>
   );
}

export default ExpenseItem;