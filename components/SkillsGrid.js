import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
        return customSVGIcons[icon]();
    }

    return (
        <div className={"skills-grid"}>
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
                                    {skillDetails.skill}
                                </span>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SkillsGrid;
