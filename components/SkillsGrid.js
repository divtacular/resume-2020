import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ReactHtmlParser from 'react-html-parser';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faJsSquare,
    faCss3,
    faHtml5,
    faWordpressSimple,
    faReact,
    faMagento,
    faOpencart,
    faBootstrap,
    faNodeJs,
    faGulp,
    faGrunt,
    faGit,
    faSass,
    faAws
} from '@fortawesome/free-brands-svg-icons';

import customSVGIcons from "../libs/customSVG";
import * as customFontAwesomeIcons from "../libs/icons";
import PropTypes from "prop-types";
import Work from "./Work";

const SkillsGrid = ({skills}) => {
    const icons = {
        faJsSquare,
        faCss3,
        faHtml5,
        faWordpressSimple,
        faReact,
        faMagento,
        faOpencart,
        faBootstrap,
        faNodeJs,
        faGulp,
        faGrunt,
        faGit,
        faSass,
        faAws
    };

    library.add(customFontAwesomeIcons);

    //Renders non fontawesome SVGs
    const renderCustomSVG = (icon) => {
        return customSVGIcons[icon] ? customSVGIcons[icon]() : null;
    }

    return (
        <div className={"skills-grid"} data-test={"component-skills"}>
            <h2 className="section-heading">Knowledge</h2>

            <ul className={"skills-grid_skills"}>
                {skills.nodes.map(({id, skillDetails}) => {
                    return (
                        <li key={id}>
                            <span>
                                <i aria-hidden="true">
                                    {skillDetails.isfonticon ?
                                        <FontAwesomeIcon
                                            title={`Proficiency: ${skillDetails.skill}`}
                                            icon={icons[skillDetails.iconname] ?
                                                icons[skillDetails.iconname] :
                                                customFontAwesomeIcons[skillDetails.iconname]}/>
                                        : renderCustomSVG(skillDetails.iconname)
                                    }
                                </i>
                                <span className={"caption"}>
                                    {ReactHtmlParser(skillDetails.skill)}
                                </span>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

SkillsGrid.propTypes = {
    skills: PropTypes.shape({
        nodes: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                skillDetails: PropTypes.shape({
                    skill: PropTypes.string.isRequired,
                    iconname: PropTypes.string.isRequired,
                    isfonticon: PropTypes.bool
                })
            })
        )
    })
};

export default SkillsGrid;
