import React from 'react';

const Education = () => {
    return (
        <div className={"education"}>
            <h2 className="section-heading">Education</h2>
            <div className={"row"}>
                <div className={"education_year"}>2004</div>
                <div className={"education_course "}>
                    <header>
                        <span className={"education_institution"}>Manchester Metropolitan University</span>
                        <span className={"education_qualification"}>HND Computing</span>
                    </header>
                    <div className={"education_course-details"}>
                        <p>Merit - Computing</p>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"education_year"}>2002</div>
                <div className={"education_course"}>
                    <header>
                        <span className={"education_institution"}>Stretford Grammar School</span>
                        <span className={"education_qualification"}>A Levels</span>
                    </header>
                    <div className={"education_course-details"}>
                        <p>Courses</p>
                        <ul>
                            <li>Computing</li>
                            <li>Business Studies</li>
                            <li>Psychology</li>
                            <li>General Studies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
