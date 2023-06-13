import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let expenses = [
    { expenseDate: new Date(28, 2, 12), expenseTitle: 'Title1', expenseAmount: 55 },
    { expenseDate: new Date(29, 2, 12), expenseTitle: 'Title2', expenseAmount: 535 },
    { expenseDate: new Date(27, 2, 12), expenseTitle: 'Title3', expenseAmount: 575 }
  ];
  const onSubmitNewExpense = (expensesDataInput) => {
    expenses = { ...expensesDataInput, id: Math.random().toString() };
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense onSubmitNewExpense={onSubmitNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
