import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({expenses}) => {
   console.log(expenses, 'from Expenses')
   const [filteredYear, setFilteredYear] = useState('2020');
   const onExpenseFilterChange = (expenseFilterChangedValue) => {
      setFilteredYear(expenseFilterChangedValue);
      console.log(filteredYear);
   }
   return (
      <>
         <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onExpenseFilterChange={onExpenseFilterChange} />
            <div>
               {
                  expenses.map(ele => <ExpenseItem expenses={ele} />)
               }
            </div>
         </Card>
      </>
   );
}

export default Expenses;
