import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test ('should set default state', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test ('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test ('should not remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


//should add expense
test ('should add expense', ()=>{
    const expense = {
        id: '109',
        description: 'Mågen Mågens',
        note: '',
        createdAt: 20000,
        amount: 2909090
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense 
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});


//should edit expense
test ('should edit expense', ()=>{
    const amount = 12121211212;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        } 
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

//should not edit expense if expense if id is not found
test ('should NOT edit expense if ID is not found', ()=>{
    const amount = 12121211212;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        } 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
