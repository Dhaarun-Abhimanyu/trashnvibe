import React, { useState } from 'react';
import './SavingsGoal.css';

export default function SavingsGoal({ income = 0, expenses = 0 }) {
  const [goal, setGoal] = useState('');
  const remaining = (Number(income) || 0) - (Number(expenses) || 0);
  const progress = goal ? Math.min(100, Math.round((remaining / goal) * 100)) : 0;

  return (
    <div className="savings-goal">
      <label>Goal amount (₹)</label>
      <input
        type="number"
        placeholder="Add a savings goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <div className="goal-row">
        <div><strong>Remaining:</strong> ₹{remaining}</div>
        <div><strong>Progress:</strong> {progress}%</div>
      </div>
      <div className="progress-bar">
        <div className="filled" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
