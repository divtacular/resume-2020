import {gql, useQuery} from '@apollo/client';
import {Switch} from "react-materialize";
import ReactHtmlParser from 'react-html-parser';
import Head from "next/head";

import Hero from "../components/Hero";
import Flare from "../components/Flare";
import SkillsGrid from "../components/SkillsGrid";
import Education from "../components/Education";
import Loading from "../components/Loading";
import Work from "../components/Work";
import Footer from "../components/Footer";

export const GET_CONTENT = gql`{
    qualifications {
        nodes {
            id
            title
            content
            educationDetails {
                coursetitle
                year
            }
        }
    }

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

    skills(where: {orderby: {field: MENU_ORDER, order: ASC}}, first: 30) {
        nodes {
            id
            skillDetails {
                skill
                isfonticon
                iconname
            }
        }
    }

    globalDataSettingsGroupSettings {
        aboutText
        heroDesc
        heroTitle
    }
}`;

export default function Home() {
    const {loading, error, data} = useQuery(GET_CONTENT);
    const [animate, setAnimate] = React.useState(true);

    const toggleAnimations = () => {
        setAnimate(!animate);
    }

    if (loading || error) return <Loading error={error}/>;

    return (
        <>
            <Head>
                <title>David Smythe - CV</title>
            </Head>
            <div className={`wrapper animation_${animate ? 'on' : 'off'}`} data-test={"component-home"}>
                <header className={"header"}>
                    <div className={"header_animation-toggle"}>
                        <span>Animations:</span>
                        <Switch
                            id="Switch-11"
                            offLabel="Off"
                            onChange={toggleAnimations}
                            onLabel="On"
                            checked={animate}
                            data-test={'toggle-switch'}
                        />
                    </div>
                    <Hero text={data.globalDataSettingsGroupSettings}/>
                </header>

                <Flare/>

                <main>
                    <div>
                        <div className={"row"}>
                            <div className={"about col s12"}>
                                <h2 className="section-heading">About</h2>
                                {ReactHtmlParser(data.globalDataSettingsGroupSettings.aboutText)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <section className={"primary"}>
                                <Work works={data.works}/>
                                <Education qualifications={data.qualifications}/>
                            </section>
                            <section className={"secondary"}>
                                <SkillsGrid skills={data.skills}/>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}
