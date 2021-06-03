import Navbar from "/components/Navbar.js";
import Sun from "/components/Sun.js";

function Abstract() {
    return (
        <div className="abstract">
            <Sun />
            <Navbar />
            <div className="text-wrapper">
                <div className="title">Abstract</div>
                <p>
                    This project presents a novel technique to predict solar
                    magnetic activity of distant stars through asteroseismic
                    analysis and machine learning algorithms. Asteroseismology,
                    the study of “star”quakes, provides astrophysicists with
                    accurate information about stellar mass, radius, and age.
                    This information may be derived from a Fourier
                    transformation on the time series data of either star
                    surface velocity or star luminosity, both expressions of
                    energy flow. The resultant frequency spectra contain
                    valuable information about the star and were previously
                    analyzed through purely theoretical methods. However, with
                    access to advanced tools such as machine learning, these
                    data may now be effectively analyzed and may reveal hidden
                    correlations.
                    <br></br>
                    <br></br>
                    Our method utilizes a neural network trained on the Sun’s
                    light curve (Luminosity Oscillations Imager) to predict the
                    Sun's magnetic activity trend indicated by sunspot number
                    (Sunspot Index and Long-term Solar Observations) for solar
                    cycle 23. The model was then cross validated for accuracy
                    with the sun's surface velocity data (Birmingham Solar
                    Oscillations Network) for both solar cycles 23 and 24, where
                    it scored a mean squared error of 0.16. The prediction
                    showed significant visual correlations with the observed
                    indicators. The ability of the model to predict accurately
                    on both surface velocity and light curve data serves as
                    justification for applying the technique to light curves of
                    Kepler stars.
                    <br></br>
                    <br></br>
                    Stellar activity data plays a major role in determining
                    exoplanet habitability and surface conditions. The use of a
                    machine learning model improves prediction accuracy and
                    provides scalability when compared to present methods.
                </p>
            </div>
        </div>
    );
}

export default Abstract;
