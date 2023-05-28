import './App.css';
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { expenseDate: new Date(28, 2, 12), expenseTitle: 'Title1', expenseAmount: 55 },
    { expenseDate: new Date(29, 2, 12), expenseTitle: 'Title2', expenseAmount: 535 },
    { expenseDate: new Date(27, 2, 12), expenseTitle: 'Title3', expenseAmount: 575 }
  ];

  return (
    <div className="App">
      <h2>Let's Go!!!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
