import "./ExpenseDate.css";
import { useState } from "react";

const ExpenseDate = (props) => {
   const expenses = props?.expenses;
   const day = expenses?.expenseDate?.toLocaleString('en-US', { day: '2-digit' });
   const month = expenses?.expenseDate?.toLocaleString('en-US', { month: 'long' });
   const year = expenses?.expenseDate?.getFullYear();
   const [title, setTitle] = useState(expenses.expenseTitle)

   const buttonClickHandler = () => {
      setTitle('Updated!');
   }

   return (
      <>
         <div className="expense-date">
            <div className="expense-date__month">{day}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__day">{year}</div>
            <div className="">{title}</div>
            <button onClick={buttonClickHandler}>Click me</button>
         </div>
      </>
   );

}

export default ExpenseDate;
