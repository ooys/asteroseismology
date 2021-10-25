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
                <div className="title">Background</div>
                <div className="subtitle">
                    Stellar Activity
                </div>
                <div className="text-content">
                The stellar activity of stars is a measure of how magnetically active a star is. 
                The surface of every star contains several magnetic fields, all interacting with each other. 
                In fact, the sunspots that we see harbor these magnetic fields and connect with each other. 
                Occasionally, these interactions tend to become violent and release massive amounts of 
                energy in what we know as “space weather”. 
                <div className="subtitle">
                Solar Flares and Coronal Mass Ejections
                </div>
                <div className="text-content">
                Major violent eruptions on stars (types of space weather) can be classified under two major phenomena: solar flares and CMEs. 
                Solar flares are caused by the intertwining of magnetic fields (known as reconnection) in a star’s chromosphere. 
                These magnetic fields, which can be found visually through the sunspots they create, vary in intensity. 
                </div>
                </div>
                <Picture
                    rawpicture="/images/background/flare.gif"
                    name="Magnetic Activity Induced Solar Flare"
                />
                <div className="text-content">
                CMEs, on the other hand, have magnetic reconnections in a star’s corona. 
                While CMEs and solar flares often accompany each other, they differ in their fundamental processes. 
                Solar flares are generally smaller than CMEs and are essentially energy-filled flashes of light. 
                CMEs are lightbulb-shaped and emit tons of plasma and energized particles away from the Sun, directly towards Earth.
                </div>
                <Picture
                    rawpicture="/images/background/cme.png"
                    name="Reach of a Coronal Mass Ejection"
                />
                <div className="subtitle">
                Implications
                </div>
                <div className="text-content">
                <strong>Earth Applications</strong>
                </div>
                <Picture
                    rawpicture="/images/background/solardanger.gif"
                    name="Dangers of Solar Flares and CMEs"
                />
                <div className="text-content">
                Ejections directly pose a danger to Earth’s satellites and electrical system. 
                In 2012, a Carrington-level CME missed Earth by a near 9 days. 
                Had it hit, scientists estimate global electrical damage to be about $1.6 trillion. 
                Additionally, it would take about 7 years to recover from such a disaster. 
                </div>
                <div className="text-content">
                <strong>Distant Applications</strong>
                </div>
                <Picture
                    rawpicture="/images/background/light_curve.png"
                    name="Light Curve from a Distant Star (KIC 10963065)"
                />
                <div className="text-content">
                Both solar flares and CMEs are known to emit massive amounts of radiation out from the Sun. 
                The Earth’s magnetic field is capable of resisting this, which is one of the reasons we’re still alive. 
                However, this may not be true for other planets. 
                Higher intensity ejections lead to greater radiation output, 
                so quantifying the intensity of ejections on other stars helps us understand the amount of radiation a potentially habitable 
                planet may experience.
                </div>
                <div className="subtitle">
                Sun Images
                </div>
                <div className="text-content">
                SDO (Solar Dynamics Observatory) provides day-by-day images of our Sun through multiple wavelengths. 
                Each wavelength views the mechanics of the Sun at its different layers (e.g. chromosphere, photosphere, corona). 
                By analyzing the Sun through different wavelengths, we can look for features that indicate the formation of a solar flare and/or coronal mass ejection to predict it early.
                </div>
                <Picture
                    rawpicture="/images/background/sdo_images.png"
                    name="Light Curve from a Distant Star (KIC 10963065)"
                />
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
