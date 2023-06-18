import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ expenses }) => {
   console.log(expenses, 'from Expenses')
   const [filteredYear, setFilteredYear] = useState('');
   const onExpenseFilterChange = (expenseFilterChangedValue) => {
      setFilteredYear(expenseFilterChangedValue);
      console.log(filteredYear);
   }
   // Filtering expenses based on Filtered Input Value from Child
   const filteredExpenses = expenses.filter((expense) => {
      const expenseDateString = String(expense.expenseDate.getFullYear());
      const inputDateString = String(filteredYear);
      return filteredYear === '' ? expense : expenseDateString === inputDateString;
   })
   return (
      <>
         <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onExpenseFilterChange={onExpenseFilterChange} />
            <div>
               {
                  filteredExpenses.length === 0
                  ?
                  <p className="no_expenses">No Expenses found.</p>
                  :
                  filteredExpenses.map(ele => <ExpenseItem key={ele?.id} expenses={ele} />)
               }
            </div>
         </Card>
      </>
   );
}

export default Expenses;
