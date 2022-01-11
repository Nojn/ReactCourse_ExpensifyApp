import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRendering from 'react-test-renderer/shallow';
import NotFoundPage from '../../components/NotFoundPage.js';



test ('should render 404 page correctly', ()=>{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
   
});