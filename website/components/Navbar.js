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
                    to="purpose"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    Background
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
            </>
        );
    } else {
        return (
            <>
                <a className="column" onClick={() => router.push("/abstract")}>
                    Abstract
                </a>
                <a
                    className="column"
                    onClick={() => router.push("/background")}>
                    Background (Updated!)
                </a>
                <a className="column" onClick={() => router.push("/method")}>
                    Method
                </a>
                <a className="column" onClick={() => router.push("/results")}>
                    Results
                </a>
                <a className="column" onClick={() => router.push("/about")}>
                    Contact Us
                </a>
            </>
        );
    }
}

function Navbar({ back }) {
    const router = useRouter();
    return (
        <div className="nav is-hidden-touch">
            <div className="columns">
                <Back active={back} />

                <Hidden active={back} />
            </div>
            <hr></hr>
        </div>
    );
}

export default Navbar;
