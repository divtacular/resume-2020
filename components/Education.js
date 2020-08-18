import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser';
import NotebookSVG from "../assets/notebook.svg";

const Education = ({qualifications}) => {
    return (
        <div className={"education"} data-test={"component-education"}>
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

Education.propTypes = {
    qualifications: PropTypes.shape({
        nodes: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                educationDetails: PropTypes.shape({
                    coursetitle: PropTypes.string.isRequired,
                    year: PropTypes.string.isRequired
                })
            })
        )
    })
};

export default Education;
