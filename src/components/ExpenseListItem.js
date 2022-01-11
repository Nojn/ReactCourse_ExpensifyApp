// Export a stateless function component
// here: Rendering the description, the amount and the "created at" value
import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={'/edit/${id}'}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button onClick={()=>{
            dispatch (removeExpense({ id }));
        }} >så flyt dig dog!</button>
    </div>
);


export default ExpenseListItem;
