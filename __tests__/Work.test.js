import React from 'react';
import {shallow} from 'enzyme';

import Work from "../components/Work";
import {findByTestAttr, checkProps} from "../testUtils";

const defaultProps = {
    works: {
        nodes: [
            {
                "id": "cG9zdDo2Mg==",
                "title": "boohoo Group",
                "content": "\n<p>TODO</p>\n\n\n\n<h4><strong>Highlights</strong></h4>",
                "workDetails": {
                    "dates": "March 2017 - June 2020",
                    "jobtitle": "Salesforce Commerce Cloud Developer",
                    "url": "boohoo.com"
                }
            }
        ]
    },
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

    const wrapper = shallow(<Work {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

describe('renders properly with basic checks', () => {
    test('does not throw warning with expected props', () => {
        checkProps(Work, defaultProps);
    });

    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-work');
        expect(component.exists()).toBe(true);
    });
});
