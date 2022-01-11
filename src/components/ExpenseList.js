import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import moment from 'moment';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>

            ) : (

            props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>;
             })
                
            )
        }
        <p>(from the ExpenseList.js file) </p>  
    </div>
);

const mapStateToProps = (state) => {
    return  {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);


