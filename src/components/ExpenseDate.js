
function ExpenseDate(props) {
   const expenses = props?.expenses;
   const day = expenses?.expenseDate?.toLocaleString('en-US', { day: '2-digit' });
   const month = expenses?.expenseDate?.toLocaleString('en-US', { month: 'long' });
   const year = expenses?.expenseDate?.getFullYear();

   return (
      <>
         <div>{day}</div>
         <div>{month}</div>
         <div>{year}</div>
      </>
   );

}

export default ExpenseDate;
