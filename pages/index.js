import {gql, useQuery} from '@apollo/client';

import Hero from "../components/Hero";
import Flare from "../components/Flare";
import SkillsGrid from "../components/SkillsGrid";
import Education from "../components/Education";
import Loading from "../components/Loading";
import Work from "../components/Work";

const GET_CONTENT = gql`{
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

    skills(first: 30) {
        nodes {
            id
            skillDetails {
                skill
                isfonticon
                iconname
            }
        }
    }
}`;

export default function Home() {
    const {loading, error, data} = useQuery(GET_CONTENT);

    if (loading || error) return <Loading error={error} />;

    return (
        <div className="wrapper">
            <header>
                <Hero/>
            </header>

            <Flare/>

            <main>
                <div>
                    <div className={"row"}>
                        <div className={"about col s12"}>
                            <h2 className="section-heading">About</h2>
                            <p>I am a passionate and experienced Web Developer with a comprehensive skill set that
                                covers
                                both front and back end development. My skills and knowledge are always up to date and
                                inline with best practices, I make a point of keeping up with emerging trends.</p>

                            <p>I have a proven ability to work equally well alone or collaborating as part of a team and
                                can
                                manage multiple projects concurrently.</p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <section className={"primary"}>
                            <Work works={data.works}/>
                            <Education qualifications={data.qualifications}/>
                        </section>
                        <section className={"secondary"}>
                            <SkillsGrid skills={data.skills} />
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                {/* Contact stuff, legal*/}
            </footer>
        </div>
    )
}
