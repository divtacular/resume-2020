import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
import * as customIcons from "../libs/icons";

const GET_SKILLS = gql`{
    skills(first: 30) {
        nodes {
            id
            skillDetails {
                skill
                isfonticon
                iconname
            }
        }
    }
}`;

const SkillsGrid = (props) => {
    library.add(customIcons);

    const {loading, error, data} = useQuery(GET_SKILLS);

    if (loading) return <></>;
    if (error) return `Error! ${error.message}`;

    return (
        <div className={"skills-grid"}>
            <h2 className="section-heading">Skills</h2>

            <ul className={"skills-grid_skills"}>
                {data.skills.nodes.map(({id, skillDetails}) => {
                    return (
                        <li key={id}>
                            <span>
                                {skillDetails.isfonticon ?
                                    <FontAwesomeIcon
                                        title={`Proficiency: ${skillDetails.skill}`}
                                        icon={icons[skillDetails.iconname] ?
                                            icons[skillDetails.iconname] : customIcons[skillDetails.iconname]}
                                    /> : <></>
                                }
                                <span className={"caption"}>
                                    {skillDetails.skill}
                                </span>
                            </span>
                        </li>
                    )
                })}
            </ul>


            {/*<ul className={"skills-grid_skills"}>*/}
            {/*    <li>*/}
            {/*        <span>*/}
            {/*            <FontAwesomeIcon title={"Proficiency: ES6"} icon={faJsSquare}/>*/}
            {/*            <span className={"caption"}>ES6</span>*/}
            {/*        </span>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <span>*/}
            {/*            <FontAwesomeIcon title={"Proficiency: CSS3"} icon={faCss3}/>*/}
            {/*            <span className={"caption"}>CSS 3</span>*/}
            {/*        </span>*/}
            {/*    </li>*/}

            {/*    /!* Apache, Foundation, Materialize, jQuery as standalone SVGs *!/*/}

            {/*</ul>*/}
        </div>
    );
};

export default SkillsGrid;
