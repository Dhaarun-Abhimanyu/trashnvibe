import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  function onSubmit(e){
    e.preventDefault();
    if(!title || amount === '') return;
    addExpense({ title, amount: Number(amount) });
    setTitle(''); setAmount('');
  }

  return (
    <form className="expense-form" onSubmit={onSubmit}>
      <h3>Add Expense</h3>
      <div className="row">
        <input
          placeholder="Title (e.g., Groceries)"
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={e=>setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
