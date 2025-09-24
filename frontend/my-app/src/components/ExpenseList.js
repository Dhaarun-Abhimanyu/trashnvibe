import React from 'react';
import './ExpenseList.css';

export default function ExpenseList({ expenses = [], removeExpense }) {
  return (
    <div className="expense-list" id="expenses">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p className="muted">No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((e, idx)=>(
            <li key={idx}>
              <div className="left">
                <div className="title">{e.title}</div>
                <div className="small muted">#{idx+1}</div>
              </div>
              <div className="right">
                <div className="amount">₹{e.amount}</div>
                <button onClick={()=>removeExpense(idx)} className="del">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
