import ReactHtmlParser from 'react-html-parser';
import PropTypes from "prop-types";
import Education from "./Education";

const Hero = ({text}) => {
    return (
        <div className={"sunset"} role={"banner"} data-test={"component-hero"}>
            <div className={"sunset_sun"}/>
            <div className={"sunset_tagline"}>
                <div className="sunset_intro">
                    <h1>{text && ReactHtmlParser(text.heroTitle)}</h1>
                    <h3>{text && ReactHtmlParser(text.heroDesc)}</h3>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    text: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        heroDesc: PropTypes.string.isRequired
    })
};

export default Hero;
