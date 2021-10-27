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
                <div className="subtitle">Kepler Space Telescope</div>
                <div className="text-content">
                    The Kepler Space Telescope observed changes in brightness of
                    stars through from May 2009 to May 2013. It was originally
                    designed to survey exoplanets through the planetary transit
                    method. For each star, Kepler records brightness
                    fluctuations over a period of time (usually 90 days) to
                    create a time series dataset known as a light curve.
                </div>
                <Picture
                    rawpicture="/images/background-new/kepler.jpg"
                    name="Kepler Solar Telescope"
                />
                <div className="text-content">
                    Although the main purpose was to detect transit events,
                    these light curves were also used by astrophysists to
                    approximate star characteristics.
                </div>
                <Picture
                    rawpicture="/images/background-new/kepler-lightcurve.png"
                    name="Normal (Long) Kepler Light Curve"
                />
                <div className="text-content">
                    The dataset has light curves for around 200,000 distant
                    stars. They have been mostly labeled by spectroscopy or
                    asteroseismology methods. However, a big piece of the
                    dataset - around 3200 stars - has no classification due to
                    short light curves or missing data.
                </div>
                <Picture
                    rawpicture="/images/background-new/short-lightcurve.png"
                    name="Short Kepler Light Curve"
                />
                <div className="text-content">
                    Current machine learning techniques on star classifications
                    are limited, with the highest accuracy being 74% by Hinners
                    et Al., 2018, who used LSTM-RNN and feature extraction.
                </div>
                <Picture
                    rawpicture="/images/background-new/kepler-labels.png"
                    name="Kepler Dataset Labels"
                />
                <div className="subtitle">Asteroseismology</div>
                <div className="text-content">
                    Stars are driven by convection forces, in which large
                    bubbles of hot plasma travel throughout the star. These
                    convection currents cause differences in pressure and
                    temperature throughout the star, causing oscillation waves
                    throughout the star’s interior. Depending on the
                    pressure/temperature, the oscillations operate at different
                    frequencies and create various pitches. We humans are not
                    able to directly hear this sound, but we are capable of
                    viewing byproducts of the oscillations - the fluctuation of
                    brightness in the star.
                </div>
                <Picture
                    rawpicture="/images/background-new/oscillation.gif"
                    name="Internal Oscillations of Star"
                />
                <div className="text-content">
                    Asteroseismologsts analyze light curves with mathematical
                    formulae to predict the energy oscillations in stars. Having
                    been used as a correction tool for fixing erroneous star
                    measurements, this newly developed technique provides
                    astronomers with extremely accurate data.
                </div>

                <div className="subtitle">Shazam</div>
                <div className="text-content">
                    Shazam is an app that analyzes the sound of a song to find
                    the name of the song from its dataset.
                </div>
                <Picture
                    rawpicture="/images/background-new/shazam-logo.svg"
                    name="Shazam Logo"
                />
                <div className="subtitle">Shazam: How it Learns</div>
                <div className="text-content">
                    The program splits song into several 4-second-long sections.
                    A Fourier Transform is used to turn each section from
                    Amplitude vs. Time to Magnitude vs. Fequency. Within each
                    interval, the frequency with the highest magnitude is
                    recorded. This creates a signature for the specific chunk of
                    the song. When combined, the signatures become the entire
                    fingerprint of the song as a whole.
                </div>
                <Picture
                    rawpicture="/images/background-new/shazam-procedure.png"
                    name="Shazam Procedure"
                />
                <Picture
                    rawpicture="/images/background-new/shazam-fourier.png"
                    name="Fourier Transformed Signals"
                />
                <Picture
                    rawpicture="/images/background-new/shazam-fingerprints.png"
                    name="Shazam Song Fingerprints"
                />
                <div className="subtitle">Shazam: How it Predicts</div>
                <div className="text-content">
                    The program samples 4-second digital signals of song. For
                    each section, a Fourier Transform is completed and the
                    frequency with the highest magnitude is recorded. The values
                    is compared with the millions of stored song fingerprints to
                    make a prediction on the potential song title.
                </div>
                <div className="subtitle">Shazam vs. Asteroseismology</div>
                <Picture
                    rawpicture="/images/background-new/bison-lightcurve1.png"
                    name="Light Curve Sample"
                />
                <Picture
                    rawpicture="/images/background-new/bison-lightcurve2.png"
                    name="Light Curve Sample, Fourier Transformed"
                />
                <div className="subtitle">Procedure</div>
                <div className="text-content">
                    <ul>
                        <li>Part 1: Replicate (Hinners et al., 2018)</li>
                        <li>Part 2: Improve Classification with StarZam</li>
                        <li>
                            Part 3: Complete Unfinished Kepler Datasets (3200
                            out of 200000 stars)
                        </li>
                    </ul>
                </div>
                <div className="subtitle">Implications</div>
                <div className="text-content">
                    <ul>
                        <li>
                            <b>1. Huge Influx of Data</b>
                            <br></br>Hubble Space Telescope produced
                            approximately 3 GB of data per day. James Webb Space
                            Telescope (JWST) is expected to produce
                            approximately 57.5 GB per day (Beichman et al.
                            2014). Square Kilometer Array, which will be online
                            in 2027, is predicted to produce on the order of
                            10^9 GB per day. It will generate data streams far
                            beyond the total Internet traffic worldwide. It is
                            simply impossible for humans to do case studies on
                            each star.
                        </li>
                        <br></br>
                        <li>
                            <b>2. Hidden Features</b>
                            <br></br>
                            Many characteristic features might not be
                            recognizable by human researchers.
                        </li>
                        <br></br>
                        <li>
                            <b>3. Incomplete/Wasted Data</b>
                            <br></br>As shown by Shazam, it’s hard for humans or
                            models to recognize incomplete datasets. However,
                            specifically-trained neural networks can do that.
                        </li>
                        <br></br>
                        <li>
                            <b>
                                4. Machine Learning Application in Kepler
                                Dataset
                            </b>
                            <br></br>
                            There is currently not many ML researches in
                            classifying Kepler datasets. Most related works are
                            in supernovae classification projects.
                        </li>
                    </ul>
                </div>
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
