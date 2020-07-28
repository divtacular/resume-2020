import {Modal, Button} from 'react-materialize';
import Hero from "../components/Hero";
import Flare from "../components/Flare";

export default function Home() {
    return (
        <div className="wrapper">
            <header>
                <Hero />
            </header>
            <Flare />
            <main className={"container"}>
            </main>
        </div>
    )
}
