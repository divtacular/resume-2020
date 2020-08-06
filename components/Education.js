import ReactHtmlParser from 'react-html-parser';
import NotebookSVG from "../assets/notebook.svg";

const Education = ({qualifications}) => {
    return (
        <div className={"education"}>
            <h2 className="section-heading">Education</h2>
            {qualifications.nodes.map(({title, content, id, educationDetails}) => {
                return (
                    <div className={"education_course"} key={id}>
                            <div className={"education_icon"}>
                                <NotebookSVG/>
                                <strong className={"education_year"}>{educationDetails.year} </strong>
                            </div>
                            <div className={"education_entry"}>
                                <span className={"education_institution"}>{title}</span>
                                <div className={"education_qualification"}>{educationDetails.coursetitle}</div>

                                <div className={"education_course-details"}>
                                    {ReactHtmlParser(content)}
                                </div>
                            </div>
                    </div>)
            })}
        </div>
    );
};

export default Education;
