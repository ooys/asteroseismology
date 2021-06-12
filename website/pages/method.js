import Navbar from "/components/Navbar.js";
import Sun from "/components/Sun.js";
import Footer from "/components/Footer.js";

function Background() {
    return (
        <div className="background">
            <Sun />
            <Navbar back="true" />
            <div className="text-wrapper">
                <div className="title">Method</div>
                <p>
                    Our universe is far from the quiet, dark, mysterious place
                    it may appear to be. Every single star we see in the night
                    sky is, In fact, loud. Stars are very large bubbles of hot
                    gas driven by convection processes due to the movement of
                    hot and cold gases. These convection currents cause
                    differences in pressure and temperature throughout the star,
                    causing oscillation waves throughout the star’s interior.
                    Depending on the pressure/temperature, the oscillations
                    operate at different frequencies and create various pitches.
                    We humans are not able to directly hear this sound, but we
                    are capable of viewing byproducts of the sound-causing
                    oscillations - the luminosity and surface velocity of the
                    star.
                </p>
                <iframe
                    className="youtube"
                    src="https://www.youtube.com/embed/H-Ci_YwfH04"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <p className="video_title">The Sound of Stars - NASA, 2019</p>
                <div className="subtitle">Luminosity & Surface Velocity</div>
                <p>
                    The surface velocity of a star contains key information
                    regarding its internal oscillations. These oscillations,
                    following the laws of convection, bounce around inside the
                    star and create pressure differences on the surface.
                    Consequently, the surface velocity across the star differs.
                    So, by tracking the changes in this surface velocity over
                    time, vital information regarding the internal oscillations
                    is found. However, there is one major caveat with using
                    surface velocity. Since surface velocity data is a visibly
                    small aspect of a star, we are constrained to only
                    collecting data from the Sun.
                    <br></br>
                    <br></br>
                    To determine the internal oscillations of distant stars, we
                    must rely on luminosity - a measure of the intrinsic
                    brightness of a star and overall energy output. It is a
                    great indicator of the internal oscillations since these
                    oscillations alter the star’s overall energy. Time series
                    star luminosity measurements are already provided by space
                    telescopes like Kepler and TESS, allowing for derivation of
                    internal oscillations of stars many light years away.
                </p>
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
