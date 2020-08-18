import React from 'react';
import {shallow} from 'enzyme';

import Education from "../components/Education";
import {findByTestAttr, checkProps} from "../testUtils";

const defaultProps = {
    qualifications: {
        nodes: [{
            id: "cG9zdDo3MA==",
            title: "Manchester Metropolitan University",
            content: "\n<p>Merit – Computing</p>\n",
            educationDetails: {
                coursetitle: "HND Computing",
                year: "2004"
            }
        }]
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

    const wrapper = shallow(<Education {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

describe('renders properly with basic checks', () => {
    test('does not throw warning with expected props', () => {
        checkProps(Education, defaultProps);
    });

    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-education');
        expect(component.exists()).toBe(true);
    });
});
