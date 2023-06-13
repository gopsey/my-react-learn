import { useState } from "react";
import "./NewExpense.css"

const NewExpense = ({ onSubmitNewExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const titleChangeListener = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: date,
        }
        onSubmitNewExpense(expenseData);
        clearForm();
    }
    const clearForm = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new_expense">
                    <div className="new_expense_controls">
                        <div className="new_expense_control">
                            <label>Title</label>
                            <input type="text" placeholder="Add Title" onChange={titleChangeListener}
                                value={title} />
                        </div>
                        <div className="new_expense_control">
                            <label>Amount</label>
                            <input type="number" min="0.01" step="0.01" placeholder="Add Amount" onChange={amountChangeHandler}
                                value={amount} />
                        </div>
                        <div className="new_expense_control">
                            <label>Date</label>
                            <input type="date" min="2019-01-01" max="2022-12-31" placeholder="Add Date"
                                onChange={dateChangeHandler} value={date} />
                        </div>
                    </div>
                    <div className="new_expense_actions">
                        <div className="new_expense_control">
                            <button type="submit">Add Expense</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NewExpense;