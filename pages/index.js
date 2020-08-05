import {Modal, Button} from 'react-materialize';
import Hero from "../components/Hero";
import Flare from "../components/Flare";
import SkillsGrid from "../components/SkillsGrid";
import Education from "../components/Education";
import Work from "../components/Work";

export default function Home() {
    return (
        <div className="wrapper">
            <header>
                <Hero/>
            </header>

            <Flare/>

            <main>
                <div>
                    {/*intro*/}
                    <div className={"row"}>
                        <section className={"primary"}>
                            <Work/>
                            <Education/>
                        </section>
                        <section className={"secondary"}>
                            <SkillsGrid/>
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
