import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRendering from 'react-test-renderer/shallow';
import Header from '../../components/Header';


test ('should render header correctly', ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRendering();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});