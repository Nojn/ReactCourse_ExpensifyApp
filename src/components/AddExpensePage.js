import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
//import Redirect from 'react-router-dom';

export class AddExpensePage extends React.Component{
  onSubmit= (expense) => {
    this.props.addExpense(expense);
    //props.history.push('/');
};
  render(){
    return (
      <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={this.onSubmit}
      />
    </div>
    )
  } 
}



  const mapDispatchtoProps=(dispatch) =>({
    addExpense: (expense) => dispatch (addExpense(expense))
  });

  export default connect(undefined, mapDispatchtoProps)(AddExpensePage);