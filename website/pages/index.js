import Sun from "/components/Sun.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Navbar from "/components/Navbar.js";
import Footer from "/components/Footer.js";

function Home() {
    const router = useRouter();
    return (
        <>
            <Sun />
            <div className="wrapper">
                <div className="tracker">
                    <Navbar back="false" />
                    <div className="section is-large" id="background">
                        <div className="columns">
                            <div className="column is-mobile">
                                <div className="header">
                                    <div className="title">Solar Activity</div>
                                    <hr></hr>
                                    <a
                                        className="subtitle"
                                        onClick={() =>
                                            router.push("/background")
                                        }>
                                        And why we should care. {"      "}
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="chevron fa-xs"
                                                icon={
                                                    faChevronRight
                                                }></FontAwesomeIcon>
                                        </span>
                                    </a>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="description">
                                    <div>Astrophysics Research Project</div>
                                    <div>Yihong Song, Rohit Prasanna (US)</div>
                                    <div>Narim Kim, Haesol Yoon (KR)</div>
                                    <div>June, 2021</div>
                                </div>
                            </div>
                            <div className="column"></div>
                        </div>
                    </div>
                    <div className="section is-large" id="purpose">
                        <div className="header centered">
                            <div className="title centered">
                                "Hearing" Stars
                            </div>
                            <hr></hr>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <a
                                className="subtitle centered"
                                onClick={() => router.push("/solar-activity")}>
                                Across the Universe.{"      "}
                                <span className="icon">
                                    <FontAwesomeIcon
                                        className="chevron fa-xs"
                                        icon={faChevronRight}></FontAwesomeIcon>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="section is-large" id="method">
                        <div>Our Techniques</div>
                    </div>

                    <div className="section is-large" id="results">
                        <div>Our Results</div>
                    </div>

                    <div className="section is-large" id="contacts">
                        <div>Data and Collaborations</div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
