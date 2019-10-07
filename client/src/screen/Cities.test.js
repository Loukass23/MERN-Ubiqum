import React from 'react';
import { shallow, render } from 'enzyme';
import Cities from './Cities';
import toJson from 'enzyme-to-json';

// it('Cities component should render without crashing', () => {
//     shallow(<Cities />);
// });

const cities = [{
    country: "Netherland",
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
    name: "Amsterdam"
}]
test("enzyme dive", () => {
    const TestComponent = () => (
        <CitiesContextProvider value={cities}>
            <Cities />
        </CitiesContextProvider>
    );
    const element = shallow(<Cities />);
    expect(element.find(Cities).dive().text()).toBe(cities);
});

// it("Cities component snapshot shallow ", () => {
//     const wrapper = shallow(<Cities />);
//     expect(wrapper).toMatchSnapshot();
// });

// it("Cities component snapshot render", () => {
//     const wrapper = render(<Cities />);
//     expect(wrapper).toMatchSnapshot();
// });
