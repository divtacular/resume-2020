import Hero from "./Hero";
import Flare from "./Flare";
import FilmReelSVG from '../assets/filmreel.svg';

const Loading = ({error}) => {
    return (
        <div className="wrapper" data-test={"component-loading"}>
            <header>
                <Hero />
            </header>

            <Flare/>

            <main>
                <div>
                    <div className={"row"}>
                        <div className={"loading "}>
                            <FilmReelSVG/>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"about col s12"}>
                            {error ? <p>Error: {error.message}</p> : <p>Loading</p>}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Loading;
