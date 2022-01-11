import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test ('Should set up remove expense action object', ()=>{
    const action = removeExpense ({ id: '666' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '666'
    });
});

test ('Should enable aditing of expense edit object', ()=>{
    const action = editExpense ('edit', { note: 'new value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'edit',
        updates: {
            note: 'new value'
        }
    });
});

test('should setup add expense action object with provided value', ()=>{
    const expenseData = {
        description: 'MDMA',
        amount: 100000,
        createdAt: 1000,
        note: 'this was last months usage of MDMA'
    }
    const action = addExpense (expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test('should setup the add expense action object with default values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String), 
            description: '',
            note:'',
            amount: 0,
            createdAt: 0
        }
    })
});