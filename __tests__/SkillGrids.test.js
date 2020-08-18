import React from 'react';
import {shallow} from 'enzyme';

import SkillsGrid from "../components/SkillsGrid";
import {findByTestAttr, checkProps} from "../testUtils";

const defaultProps = {
    skills: {
        nodes: [
            {
                "id": "cG9zdDo5Mg==",
                "skillDetails": {
                    "skill": "ES6",
                    "isfonticon": true,
                    "iconname": "faJsSquare"
                }
            },
            {
                "id": "cG9zdDo5Ma==",
                "skillDetails": {
                    "skill": "HTML",
                    "isfonticon": false,
                    "iconname": "someIcon"
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

    const wrapper = shallow(<SkillsGrid {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

describe('renders properly with basic checks', () => {
    test('does not throw warning with expected props', () => {
        checkProps(SkillsGrid, defaultProps);
    });

    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-skills');
        expect(component.exists()).toBe(true);
    });
});
