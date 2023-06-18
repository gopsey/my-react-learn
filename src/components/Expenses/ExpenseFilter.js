const ExpenseFilter = ({onExpenseFilterChange}) => {
    const expenseFilterChangeHandler = (event) => {
        const inputFilterValue = event.target.value;
        onExpenseFilterChange(inputFilterValue);
    }
    return (
        <>
            <select type="dropdown" onChange={expenseFilterChangeHandler}>
                <option value="">None</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </>
    )
}

export default ExpenseFilter;