import ReactHtmlParser from 'react-html-parser';
import ComputerSVG from '../assets/computer.svg';

const Work = ({works}) => {
    return (
        <div className={"work-experience"}>
            <h2 className="section-heading">Work Experience</h2>
            {works.nodes.map(({title, content, id, workDetails}) => {
                return (
                    <div className={"work"} key={id}>
                        <header>
                            <div className={"work_icon"}>
                                <ComputerSVG/>
                            </div>
                            <div className={"work_entry"}>
                                <span className={"work_workplace"}>{title}</span>
                                <span className={"work_url"}>{workDetails.url}</span>
                                <span className={"work_year"}>{workDetails.dates}</span>
                            </div>
                        </header>
                        <div className={"work_desc"}>
                            <h3>{workDetails.jobtitle}</h3>
                            {ReactHtmlParser(content)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Work;
