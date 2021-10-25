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
                <div className="subtitle">
                    <a href="astero.vercel.app">Star Classification through Machine Learning and Asteroseismology</a>
                </div>
                <div className="subtitle">
                    <a href="background-new">Prediction of Solar Flare Intensity for Stellar Objects</a>
                </div>
                <div className="title">Background</div>
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
                <div className="subtitle">Stellar Activity: Implications</div>
                <div className="text-content">
                    The increased stellar activity of the Sun is known to
                    elevate the chance of solar flares and coronal mass
                    ejections, which can have devastating effects on the Earth’s
                    electrical grid. In 2012, a Carrington level CME narrowly
                    missed the Earth. Had it hit, scientists estimate power
                    grids around the globe to fail, rendering billions of people
                    powerless.
                </div>
                <Picture
                    rawpicture="/images/background/solardanger.gif"
                    name="Dangers of Strong Solar Activity"
                />
                <div className="text-content">
                    Our Sun is the only star in the universe capable of life
                    (that we know of so far) and is thus a crucial standard in
                    the search for life. Outside of our solar system, stellar
                    activity plays a key role in determining habitable planets
                    due to the emitted radiation. Locating a star that has
                    similar stellar activity trends to that of the Sun could
                    produce promising results.
                </div>
                <div className="subtitle">
                    Energy Oscillation: The Symphony of Stars
                </div>
                <div className="text-content">
                    To quantify the internal oscillations of stars, we must look
                    to music. Every single star we see in the night sky is, in
                    fact, part of a universal symphony. Stars are driven by
                    convection forces, in which large bubbles of hot plasma
                    travel throughout the star. These convection currents cause
                    differences in pressure and temperature throughout the star,
                    causing oscillation waves throughout the star’s interior.
                    Depending on the pressure/temperature, the oscillations
                    operate at different frequencies and create various pitches.
                    We humans are not able to directly hear this sound, but we
                    are capable of viewing byproducts of the sound-causing
                    oscillations - the luminosity and surface velocity of the
                    star.
                </div>
                <iframe
                    className="youtube"
                    src="https://www.youtube.com/embed/H-Ci_YwfH04"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <div className="media-title">
                    The Sound of Stars - NASA, 2019
                </div>

                <div className="subtitle">
                    Energy Oscillation: Detection Methods
                </div>
                <div className="text-content">
                    The surface velocity of a star contains key information
                    regarding its internal oscillations. The pressure
                    differences across the star (caused by oscillations)
                    directly affect the velocity of hot gas on the surface. So,
                    by tracking the changes in this surface velocity over time,
                    vital information regarding the internal oscillations is
                    found. However, there is one major caveat with using surface
                    velocity. Since surface velocity data is a visibly small
                    aspect of a star, we are constrained to only collecting data
                    from the Sun.
                </div>
                <Picture
                    rawpicture="/images/background/oscillation.gif"
                    name="Star Energy Oscillations"
                    size="is-small"
                />
                <div className="text-content">
                    To determine the internal oscillations of distant stars, we
                    must rely on luminosity - a measure of the intrinsic
                    brightness of a star and overall energy output. It is a
                    great indicator of the internal oscillations since these
                    oscillations alter the star’s overall energy. The luminosity
                    of distant stars is provided as light curves by telescopes
                    such as Kepler and TESS, allowing for derivation of internal
                    oscillations of stars many light years away.
                </div>
                <Picture
                    rawpicture="/images/background/luminosity.gif"
                    name="Star Luminosity Oscillations"
                />
                <div className="subtitle">
                    Machine Learning & Asteroseismology: The Missing Pieces
                </div>
                <div className="text-content">
                    While surface velocity and luminosity are expressions of the
                    internal oscillations, it is impossible to view the
                    oscillations directly. To properly derive the oscillations,
                    we use the concept of Asteroseismology. This field uses
                    mathematical formulae to predict the energy oscillations in
                    stars. Having been used as a correction tool for fixing
                    erroneous star measurements, this newly developed technique
                    provides astronomers with extremely accurate data.
                </div>
                <div className="text-content">
                    Machine learning is a branch of artificial intelligence that
                    focuses on detecting hidden trends within data and using
                    those trends to predict corresponding values. Since there is
                    not yet a mathematical pathway between asteroseismology and
                    stellar activity, a neural network would be the perfect tool
                    to join these missing pieces together and detect
                    correlations between energy oscillations and stellar
                    activity.
                </div>
                <div className="subtitle">Research Overview</div>
                <div className="text-content">
                    With missing pieces now in place, stellar activity for
                    distant stars is now able to be accurately detected. In this
                    research, a feed-forward neural network learns the
                    asteroseismic correlation between stellar activity and
                    surface oscillations of the sun. Light curves of distant
                    stars are then fed into this model to produce the predicted
                    stellar activity.
                </div>
                <Picture
                    rawpicture="/images/background/roadmap.svg"
                    name="Research Roadmap"
                    size="is-large"
                />
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
