import {Button, Modal} from "react-materialize";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faGithubSquare,
    faLinkedin,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div>
                <span>&copy; David Smythe
                    <a href="mailto:me@davidsmythe.com"> me@davidsmythe.com</a>
                    <a className={"footer_social"} href={"https://twitter.com/divtacular"}>
                        <FontAwesomeIcon title={`Go to my Twitter Profile`} icon={faTwitterSquare}/>
                    </a>
                    <a className={"footer_social"} href={"https://www.linkedin.com/in/david-smythe-8582b378/"}>
                        <FontAwesomeIcon title={`Go to my LinkedIn page`} icon={faLinkedin}/>
                    </a>
                    <a className={"footer_social"} href={"https://github.com/divtacular/"}>
                        <FontAwesomeIcon title={`Go to my Github Profile`} icon={faGithubSquare}/>
                    </a>
                </span>
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Credits"
                    id="Modal-0"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: false,
                        startingTop: '4%'
                    }}
                    trigger={<Button node="anchor" flat small={true}>Credits</Button>}
                >
                    <p>
                        Flat Icons provided free by <a href="https://www.flaticon.com/authors/flat-icons"
                                                       title="Flat Icons">www.flaticon.com</a>
                    </p>
                    <p>
                        SVG Icons provided free by <a href={"https://svgporn.com/"}>SVG Porn</a>
                    </p>
                </Modal>
            </div>
        </footer>
    );
};

export default Footer;
