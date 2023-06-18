import { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    { id: '1', expenseDate: new Date(2020, 2, 12), expenseTitle: 'Title1', expenseAmount: 55 },
    { id: '2', expenseDate: new Date(2021, 2, 12), expenseTitle: 'Title2', expenseAmount: 535 },
    { id: '3', expenseDate: new Date(2022, 2, 12), expenseTitle: 'Title3', expenseAmount: 575 }
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const onSubmitNewExpense = (expensesDataInput) => {
    const listOfExpenses = { ...expensesDataInput, id: Math.random().toString() };
    console.log(listOfExpenses);
    setExpenses((prevState) => {
      return [ ...prevState, listOfExpenses ]
    })
  }

  return (
    <div className="App">
      <NewExpense onSubmitNewExpense={onSubmitNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
