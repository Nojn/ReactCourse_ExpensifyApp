import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRendering from 'react-test-renderer/shallow';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage.js';



test ('should render Dashboard page correctly', ()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});