import React from "react";
import {mount} from "enzyme";
import {MockedProvider} from '@apollo/client/testing';
import {findByTestAttr} from "../testUtils";

import Home, {GET_CONTENT} from "../pages/index.js";

const mocks = [
    {
        request: {
            query: GET_CONTENT
        },
        result: {
            data: {
                qualifications: {
                    nodes: [
                        {
                            "id": "cG9zdDo3MA==",
                            "title": "Manchester Metropolitan University",
                            "content": "\n<p>Merit – Computing</p>\n",
                            "educationDetails": {
                                "coursetitle": "HND Computing",
                                "year": "2004"
                            }
                        }
                    ]
                },
                works: {
                    nodes: [
                        {
                            "id": "cG9zdDo2Mg==",
                            "title": "boohoo Group",
                            "content": "\n<p>TODO</p>\n\n\n\n<h4><strong>Highlights</strong></h4>\n\n\n\n<ul><li>TODO</li></ul>\n",
                            "workDetails": {
                                "dates": "March 2017 - June 2020",
                                "jobtitle": "Salesforce Commerce Cloud Developer",
                                "url": "boohoo.com"
                            }
                        }
                    ]
                },
                skills: {
                    nodes: [
                        {
                            "id": "cG9zdDo5Mg==",
                            "skillDetails": {
                                "skill": "ES6",
                                "isfonticon": true,
                                "iconname": "faJsSquare"
                            }
                        }
                    ]
                },
                globalDataSettingsGroupSettings: {
                        "aboutText": "<p>I am a passionate and experienced commercially aware Web Developer</p>",
                        "heroDesc": "Experienced web developer practiced in bespoke ecommerce and CMS development",
                        "heroTitle": "<span>David Smythe,</span><span>Frontend Web Developer</span>"
                }
            }
        }
    }
];

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    return mount(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Home/>
        </MockedProvider>
    );
}

describe('initial render states', () => {
    //Suppress `act()` error until better understood
    const originalError = console.error;

    beforeAll(() => {
        console.error = (...args) => {
            if (/Warning.*not wrapped in act/.test(args[0])) {
                return;
            }

            originalError.call(console, ...args);
        };
    });

    afterAll(() => {
        console.error = originalError;
    });

    test('should render loading state initially', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-loading');
        expect(component.exists()).toBe(true);
    });

    test('should render page when data ready', async () => {
        const wrapper = setup();
        await new Promise(resolve => setTimeout(resolve, 100)); // wait for response
        wrapper.update();

        const component = findByTestAttr(wrapper, 'component-home');
        expect(component.exists()).toBe(true);
    });
});
