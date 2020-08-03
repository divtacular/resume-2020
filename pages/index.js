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
                <div className={"container"}>
                    <section className={"primary"}>
                        {/*intro*/}
                        <Education/>
                        <Work/>
                    </section>
                    <section className={"secondary"}>
                        <SkillsGrid/>
                    </section>
                </div>
            </main>
            <footer>
                {/* Contact stuff, legal*/}
            </footer>
        </div>
    )
}
