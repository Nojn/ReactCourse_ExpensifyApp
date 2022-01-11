import moment from 'moment';


export default [{
    id: '1',
    description: 'Måge',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Maude',
    note: '',
    amount: 666,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Kaffe',
    note: '',
    amount: 666999,
    createdAt: moment(0).add(4, 'days').valueOf()
}]