import React from 'react';
import './Navbar.css';

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">Code n Vibe — Finance</div>
        <nav className="nav-links">
          <a href="#expenses">Expenses</a>
          <a href="#chart">Chart</a>
          <a href="#debt">Debt Calc</a>
        </nav>
      </div>
    </header>
  )
}
