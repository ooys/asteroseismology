import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const router = useRouter();
    return (
        <div className="nav is-hidden-touch">
            <div className="columns">
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
