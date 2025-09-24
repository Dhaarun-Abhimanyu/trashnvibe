import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ChartBox from './components/ChartBox';
import SavingsGoal from './components/SavingsGoal';
import DebtCalculator from './components/DebtCalculator';
import LiquidEther from './components/LiquidEther'; // ✅ import here
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = (item) => setExpenses(prev => [...prev, item]);
  const removeExpense = (index) =>
    setExpenses(prev => prev.filter((_, i) => i !== index));

  const totalExpenses = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const savings = (Number(income) || 0) - totalExpenses;

  return (
    <div className="app-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 🔹 Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 🔹 Foreground Content */}
      <Navbar />
      <main className="container">
        <section className="top-row">
          <div className="card">
            <h2>Income</h2>
            <div className="income-row">
              <input
                type="number"
                placeholder="Enter monthly income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              <div className="summary">
                <div><strong>Total Expenses:</strong> ₹{totalExpenses}</div>
                <div><strong>Remaining:</strong> ₹{savings}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Savings Goal</h2>
            <SavingsGoal income={Number(income) || 0} expenses={totalExpenses} />
          </div>
        </section>

        <section className="middle-row">
          <div className="card">
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} removeExpense={removeExpense} />
          </div>

          <div className="card">
            <ChartBox expenses={expenses} />
          </div>
        </section>

        <section className="bottom-row card">
          <h2>Debt Repayment Calculator</h2>
          <DebtCalculator />
        </section>
      </main>
    </div>
  );
}

export default App;
