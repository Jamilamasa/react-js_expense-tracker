import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

export default function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseHandler(expense){
    const expenses = {
      ...expense
    }
    props.onAddExpense(expenses)
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}
