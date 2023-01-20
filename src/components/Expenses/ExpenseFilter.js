import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    
    const dropdownChangeHandler = (e)=> {
        props.onFilterDate(e.target.value)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.value} onChange={dropdownChangeHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;