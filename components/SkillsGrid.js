import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import * as icons from '@fortawesome/free-brands-svg-icons';
import * as customFontAwsIcons from "../libs/icons";

import FoundationSVG from '../assets/foundation.svg';
import ApacheSVG from '../assets/apache.svg';
import MaterializeSVG from '../assets/materializecss.svg';
import jQuerySVG from '../assets/jquery.svg';

const SkillsGrid = ({skills}) => {
    const customSVGIcons = {FoundationSVG, ApacheSVG, MaterializeSVG, jQuerySVG};
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
