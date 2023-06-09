import "./NewExpense.css"

const NewExpense = () => {
    return (
        <>
            <form>
                <div className="new_expense_controls">
                    <div className="new_expense_control">
                        <input type="text" placeholder="Add Title" />
                    </div>
                    <div className="new_expense_control">
                        <input type="number" placeholder="Add Amount" />
                    </div>
                    <div className="new_expense_control">
                        <input type="date" min="0.01" step="0.01" placeholder="Add Date" />
                    </div>
                </div>
                <div className="new_expense_actions">
                    <div className="new_expense_control">
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NewExpense;