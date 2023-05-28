import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
   const expenses = props.expenses;

   return (
      <div className="expenses">
         {
            expenses.map(ele => <ExpenseItem expenses={ele} />)
         }
      </div>
   );
}

export default Expenses;
