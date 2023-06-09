import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({expenses}) => {
   return (
      <div className="expenses">
         {
            expenses.map(ele => <ExpenseItem expenses={ele} />)
         }
      </div>
   );
}

export default Expenses;
