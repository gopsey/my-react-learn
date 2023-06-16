import "./ExpenseDate.css";

const ExpenseDate = (props) => {
   const expenses = props?.expenses;
   const inputDate = new Date(expenses?.expenseDate);
   const day = inputDate?.toLocaleString('en-US', { day: '2-digit' });
   const month = inputDate?.toLocaleString('en-US', { month: 'long' });
   const year = inputDate?.getFullYear();

   return (
      <>
         <div className="expense-date">
            <div className="expense-date__month">{day}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__day">{year}</div>
         </div>
      </>
   );

}

export default ExpenseDate;
