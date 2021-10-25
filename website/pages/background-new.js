import Navbar from "/components/Navbar.js";
import Sun from "/components/Sun.js";
import Footer from "/components/Footer.js";
import LazyLoad from "react-lazyload";

function Picture({ rawpicture, name, size }) {
    if (rawpicture != null) {
        if (size != null) {
            return (
                <div className="picture-frame">
                    <LazyLoad once={true}>
                        <img
                            className={"background-picture " + size}
                            src={rawpicture}
                            alt={name}
                        />
                    </LazyLoad>
                    <div className="media-title">{name}</div>
                </div>
            );
        } else {
            return (
                <div className="picture-frame">
                    <LazyLoad once={true}>
                        <img
                            className="background-picture"
                            src={rawpicture}
                            alt={name}
                        />
                    </LazyLoad>
                    <div className="media-title">{name}</div>
                </div>
            );
        }
    } else {
        return <br></br>;
    }
}

function Background() {
    return (
        <div className="background">
            <Sun />
            <Navbar back="true" />
            <div className="text-wrapper">
                <div className="title">New Background</div>
                <div className="subtitle">
                    Stellar Activity: Dependent Variable
                </div>
                <div className="text-content">
                    Stellar activity of stars is an important aspect of star
                    system habitability. Encompassing phenomena such as
                    sunspots, solar flares, and coronal mass ejections (CMEs),
                    stellar activity is a measure of how magnetically “active” a
                    star is. The interactions of magnetic fields on the surface
                    of the sun are a product of energy oscillations within the
                    star. Without the ability to quantify internal oscillations,
                    scientists are currently unable to determine stellar
                    activity of distant stars.
                </div>
                <Picture
                    rawpicture="/images/background/flare.gif"
                    name="Magnetic Activity Induced Solar Flare"
                />

                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
