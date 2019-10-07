import React from 'react';
import { shallow, render } from 'enzyme';
import Landing from './Landing';
import toJson from 'enzyme-to-json';

it('Landing component should render without crashing', () => {
    shallow(<Landing />);
});

it("landing component snapshot shallow ", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
});

it("landing component snapshot render", () => {
    const wrapper = render(<Landing />);
    expect(wrapper).toMatchSnapshot();
});
