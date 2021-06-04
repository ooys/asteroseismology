import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Back({ active }) {
    const router = useRouter();
    if ({ active }.active === "true") {
        return (
            <>
                <a className="column" onClick={() => router.push("/")}>
                    Back
                    <span className="icon">
                        <FontAwesomeIcon
                            className="chevron fa-xs"
                            icon={faChevronRight}></FontAwesomeIcon>
                    </span>
                </a>
            </>
        );
    } else {
        return <></>;
    }
}

function Hidden({ active }) {
    const router = useRouter();
    if ({ active }.active != "true") {
        return (
            <>
                <a className="column" onClick={() => router.push("/abstract")}>
                    Abstract
                </a>
                <Link
                    className="column"
                    activeClass="active"
                    to="background"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Background
                </Link>
                <Link
                    className="column"
                    activeClass="active"
                    to="purpose"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Purpose
                </Link>
                <Link
                    className="column"
                    activeClass="active"
                    to="method"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Method
                </Link>
                <Link
                    className="column"
                    activeClass="active"
                    to="results"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Results
                </Link>
            </>
        );
    } else {
        return <></>;
    }
}

function Navbar({ back }) {
    const router = useRouter();
    console.log({ back });
    return (
        <div className="nav is-hidden-touch">
            <div className="columns">
                <Back active={back} />

                <Hidden active={back} />
                <Link
                    className="column"
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Contact Us
                </Link>
            </div>
            <hr></hr>
        </div>
    );
}

export default Navbar;
