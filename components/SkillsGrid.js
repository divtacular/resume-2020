import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
    faAws
} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGraphQl, faNextJS, faPrisma} from "../libs/icons";


const SkillsGrid = () => {
    library.add(faGraphQl, faNextJS, faPrisma);

    return (
        <div className={"skills-grid"}>
            <h2 className="section-heading">Skills</h2>
            <ul className={"skills-grid_skills"}>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: ES6"} icon={faJsSquare}/>
                        <span className={"caption"}>ES6</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: CSS3"} icon={faCss3}/>
                        <span className={"caption"}>CSS 3</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: HTML5"} icon={faHtml5}/>
                        <span className={"caption"}>HTML</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: React"} icon={faReact}/>
                        <span className={"caption"}>React</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: NextJS"} icon={faNextJS}/>
                        <span className={"caption"}>NextJS</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: React"} icon={faReact}/>
                        <span className={"caption"}>React Native</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Prisma"} icon={faPrisma}/>
                        <span className={"caption"}>Prisma</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: GraphQL"} icon={faGraphQl}/>
                        <span className={"caption"}>GraphQL</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Bootstrap"} icon={faBootstrap}/>
                        <span className={"caption"}>Bootstrap</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Git Version Control"} icon={faGit}/>
                        <span className={"caption"}>Git</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: NodeJS"} icon={faNodeJs}/>
                        <span className={"caption"}>Node</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Gulp"} icon={faGulp}/>
                        <span className={"caption"}>Gulp</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Grunt"} icon={faGrunt}/>
                        <span className={"caption"}>Grunt</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: WordPress"} icon={faWordpressSimple}/>
                        <span className={"caption"}>Wordpress</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Magento"} icon={faMagento}/>
                        <span className={"caption"}>Magento</span>
                    </span>

                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: Opencart"} icon={faOpencart}/>
                        <span className={"caption"}>Opencart</span>
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon title={"Proficiency: AWS"} icon={faAws}/>
                        <span className={"caption"}>AWS</span>
                    </span>
                </li>

                {/* Apache, Foundation, Materialize, jQuery as standalone SVGs */}

            </ul>
        </div>
    );
};

export default SkillsGrid;
