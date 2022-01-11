import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', ()=>{
    const state= filterReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month')
    });
});

test('should set sortBy amount', ()=>{
    const state= filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount'); 
});

test('should set sortBy date', ()=>{
    const currentState ={
        text: '',
        startDate: undefined,
        endDate: undefined, 
        sortBy: 'amount'
    };
    const action = {type:'SORT_BY_DATE'};
    const state = filterReducers(currentState, action);

    expect(state.sortBy).toBe('date'); 
});

//should set text filter
test('should set text filter', ()=>{
    const text = 'this is my filter';
    const action ={
        type: 'SET_TEXT',
        text
    };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text); 
});


// should set startDate filter
test('should set startDate filter', ()=>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    };
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(startDate); 
});

// should set endDate filter
test('should set endDate filter', ()=>{
    const endDate = moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    };
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate); 
});
