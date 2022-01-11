import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilters } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const store = configureStore ();

store.dispatch(addExpense({ description:'Cocaine bill', amount: 45000000, createdAt:1001 }));
store.dispatch(addExpense({ description:'MDMA bill', amount: 300000000, createdAt:1000 }));
store.dispatch(addExpense({ description:'Charlie Sheen bill', amount: 40000, createdAt:999999 }));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));