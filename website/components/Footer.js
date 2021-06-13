import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="columns">
                <div className="column is-half">
                    <div className="footer_title">
                        Prediction of Stellar Activity
                    </div>
                    <div className="footer_subtitle">
                        through Machine Learning and Asteroseismic Analysis
                    </div>
                    <hr></hr>
                    <a
                        className="icon-anchor"
                        id="footer-button-email"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:michaelsong4399@gmail.com,rohit.prasanna1@gmail.com">
                        <span className="icon">
                            <FontAwesomeIcon
                                icon={faEnvelope}></FontAwesomeIcon>
                        </span>
                    </a>
                    <a
                        className="icon-anchor"
                        id="footer-button-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/michaelsong4399/asteroseismology">
                        <span className="icon">
                            <FontAwesomeIcon
                                icon={fab.faGithub}></FontAwesomeIcon>
                        </span>
                    </a>
                </div>
                <div className="column is-half"></div>
            </div>
        </div>
    );
}

export default Footer;
