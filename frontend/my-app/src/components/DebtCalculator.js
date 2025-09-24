import React, { useState } from 'react';
import './DebtCalculator.css';

export default function DebtCalculator(){
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState(null);

  function calc(e){
    e.preventDefault();
    const P = Number(principal);
    const r = (Number(annualRate) || 0) / 100 / 12;
    const n = Number(months);
    if(!P || !n) return;

    let monthly;
    if(r === 0) monthly = P / n;
    else monthly = (P * r) / (1 - Math.pow(1 + r, -n));

    setResult({
      monthly: monthly,
      total: monthly * n,
      interest: monthly * n - P,
    });
  }

  return (
    <form className="debt-form" onSubmit={calc} id="debt">
      <div className="inputs">
        <input type="number" placeholder="Principal (₹)" value={principal} onChange={e=>setPrincipal(e.target.value)} />
        <input type="number" placeholder="Annual rate (%)" value={annualRate} onChange={e=>setAnnualRate(e.target.value)} />
        <input type="number" placeholder="Months" value={months} onChange={e=>setMonths(e.target.value)} />
        <button type="submit">Calculate</button>
      </div>

      {result && (
        <div className="result">
          <div><strong>Monthly payment:</strong> ₹{result.monthly.toFixed(2)}</div>
          <div><strong>Total paid:</strong> ₹{result.total.toFixed(2)}</div>
          <div><strong>Interest:</strong> ₹{result.interest.toFixed(2)}</div>
        </div>
      )}
    </form>
  );
}
