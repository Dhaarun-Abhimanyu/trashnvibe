import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import './ChartBox.css';

const COLORS = ['#5b21b6','#7c3aed','#22c55e','#f59e0b','#ef4444','#06b6d4','#a78bfa'];

export default function ChartBox({ expenses = [] }){
  const data = expenses.map((e, i)=>({ name: e.title, value: Number(e.amount) || 0 }));
  const total = data.reduce((s,d)=>s+d.value, 0);

  return (
    <div className="chart-box" id="chart">
      <h3>Spending Breakdown</h3>
      {data.length === 0 ? (
        <p className="muted">Add expenses to see the chart.</p>
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} label>
                {data.map((_, idx)=>(<Cell key={idx} fill={COLORS[idx % COLORS.length]} />))}
              </Pie>
              <Tooltip formatter={(val)=>`₹${val}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="chart-total">Total: ₹{total}</div>
    </div>
  );
}
