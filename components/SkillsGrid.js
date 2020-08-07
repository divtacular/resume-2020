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
    faSass
} from '@fortawesome/free-brands-svg-icons';

import * as customFontAwsIcons from "../libs/icons";
//Todo move to custom fonts file and return as arr
import FoundationSVG from '../assets/foundation.svg';
import ApacheSVG from '../assets/apache.svg';
import MaterializeSVG from '../assets/materializecss.svg';
import jQuerySVG from '../assets/jquery.svg';

const SkillsGrid = ({skills}) => {
    const customSVGIcons = {FoundationSVG, ApacheSVG, MaterializeSVG, jQuerySVG};
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
        faSass
    };

    library.add(customFontAwsIcons);

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
                                                customFontAwsIcons[skillDetails.iconname]}/>
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
