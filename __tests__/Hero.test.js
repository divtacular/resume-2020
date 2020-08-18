import React from 'react';
import {shallow} from 'enzyme';

import Hero from "../components/Hero";
import {findByTestAttr, checkProps} from "../testUtils";

const defaultProps = {
    text: {
        heroTitle: "Some Title",
        heroDesc: "some desc",
    }
};
/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = {...defaultProps, ...props};

    const wrapper = shallow(<Hero {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

describe('renders properly with basic checks', () => {
    test('does not throw warning with expected props', () => {
        checkProps(Hero, defaultProps);
    });

    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-hero');
        expect(component.exists()).toBe(true);
    });
});
