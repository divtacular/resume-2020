import React from 'react';
import {gql, useQuery} from '@apollo/client';
import ReactHtmlParser from 'react-html-parser';

import ComputerSVG from '../assets/computer.svg';


const GET_WORK = gql`{
    works {
        nodes {
            id
            title(format: RENDERED)
            content
            workDetails {
                dates
                jobtitle
                url
            }
        }
    }
}`;
const Work = () => {
    const {loading, error, data} = useQuery(GET_WORK);

    if (loading) return <></>;
    if (error) return `Error! ${error.message}`;

    return (
        <div className={"work-experience"}>
            <h2 className="section-heading">Work Experience</h2>
            {data.works.nodes.map(({title, content, id, workDetails}) => {
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
