import Sun from "/components/Sun.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    return (
        <>
            <Sun />
            <div className="wrapper">
                <div className="tracker">
                    <div className="section is-large">
                        <div className="columns">
                            <div className="column is-mobile">
                                <div className="header">
                                    <div className="title">Solar Activity</div>
                                    <hr></hr>
                                    <a className="subtitle">
                                        And why we should care. {"      "}
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="chevron fa-xs"
                                                icon={faChevronRight}
                                                onClick={() =>
                                                    router.push(
                                                        "/solar-activity"
                                                    )
                                                }></FontAwesomeIcon>
                                        </span>
                                    </a>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="description">
                                    <div>Astrophysics Research Project</div>
                                    <div>Yihong Song, Rohit Prasanna</div>
                                    <div>June, 2021</div>
                                </div>
                            </div>
                            <div className="column"></div>
                        </div>
                    </div>
                    <div className="section is-large">
                        <div className="header">
                            <div className="title centered">
                                "Hearing" Stars
                            </div>
                            <hr></hr>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <br className="is-hidden-touch"></br>
                            <div className="subtitle centered">
                                Across the Universe.
                            </div>
                        </div>
                    </div>
                    <div className="section is-large">
                        <div>Our Techniques</div>
                    </div>

                    <div className="section is-large">
                        <div>Our Results</div>
                    </div>

                    <div className="section is-large">
                        <div>Data and Collaborations</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
