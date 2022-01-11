import moment from 'moment';
import { setStartDate, setEndDate, setTextFilters, sortByAmount, sortByDate } from "../../actions/filters";

//--- SET START DATE --- //
test ('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

//--- SET END DATE ---//
test ('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


//--- SET TEXT FILTERS, default text ---//
test ('should generate set text object with default', () => {
    const action = setTextFilters();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

//--- SET TEXT FILTERS ---//
test ('should generate text filter object with text value', () => {
    const text=('something added')
    const action = setTextFilters(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text
    });
});

//--- SORT BY DATE ---//
test ('should generate object for sort by date', () => {
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});

//--- SORT BY AMOUNT ---//
test ('should generate object for sort by amount', () => {
   expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
});