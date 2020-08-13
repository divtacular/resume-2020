import ReactHtmlParser from 'react-html-parser';

const Hero = ({text}) => {
    return (
        <div className={'sunset'} role={"banner"}>
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

export default Hero;
