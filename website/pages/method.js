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

function Method() {
    return (
        <div className="background">
            <Sun />
            <Navbar back="true" />
            <div className="text-wrapper">
                <div className="title">Method</div>
                <div className="subtitle">Part I: Data Preprocessing</div>
                <div className="text-content">
                    <b>Step 1 - Import Libraries</b>
                    <br></br>
                    We imported the following libraries to aid us in creating
                    the machine learning model and quickly accomplish difficult
                    tasks: Lightkurve + Comments explaining what it does
                    Tensorflow + Comments... Matplotlib + comment Numpy + cmt
                    Sklearn + c
                </div>
                <div className="text-content">
                    <b>Step 2 - Data Collection</b>
                    <br></br>
                    Surface velocity and luminosity data (independent variable)
                    was downloaded from the Birmingham Solar Oscillations
                    Network (BiSON) and Luminosity Oscillations Imager (LOI),
                    respectively. Both of these are representations of internal
                    oscillations, so both are used to train the machine learning
                    model to get a more well-rounded estimate.
                </div>
                <Picture
                    rawpicture="/images/method/virgo.png"
                    name="Solar and Heliospheric Observatory (SOHO)"
                />
                <div className="text-content">
                    Sunspot data (dependent variable) was also downloaded from
                    the Sunspot Index and Long-Term Solar Observations database.
                    Sunspots are a direct result of stellar activity and are a
                    visibly measurable quantity on the Sun, making it a perfect
                    candidate to train the machine learning model on.
                </div>
                <div className="text-content">
                    <b>Step 3 - Sample Creation</b>
                    <br></br>
                    To determine a stellar activity trend, the oscillations must
                    be tracked over time. The time-series independent variables
                    are divided into various subsequent segments that embodies
                    this. Using a 90 day long “slider” that shifts by 30 days
                    each segment, the time-series is divided into a series of
                    90-day long segments.
                </div>
                <div className="text-content">
                    To arrive at the pure oscillation modes, we apply a fourier
                    transform onto each segment. The resulting Lomb-Scargle
                    Periodogram showcases various frequencies and their powers.
                    It’s similar to dividing a song based on note (frequency)
                    and counting how much of each note is in the song (power).
                </div>
                <Picture
                    rawpicture="/images/method/fourier.gif"
                    name="Visual of Fourier Transformation"
                />
                <div className="text-content">
                    Applying this transformation to a single 90-day segment
                    results in an oscillation group, containing various
                    oscillation modes (example below). Each oscillation group
                    contains many oscillation modes, both small and large.
                    Larger oscillation modes have a greater effect on stellar
                    activity, so these peaks must be isolated.
                </div>
                <Picture
                    rawpicture="/images/method/bison.png"
                    name="Power Spectrum with Oscillation Modes"
                />
                <div className="text-content">
                    <b>Step 4 - Asteroseismic Peak Finding</b>
                    <br></br>
                    Asteroseismic characteristics are distributed in peaks of
                    certain frequencies in the periodogram. This algorithm below
                    finds and extracts asteroseismic information out of these
                    peaks.
                </div>
                <div className="subtitle">
                    Part II: Neural Network Construction
                </div>
                <div className="text-content">
                    <b>Step 5 - Train-test Split</b>
                    <br></br>
                    Once the most prominent oscillation modes per 90 day segment
                    have been found, it is paired with its corresponding sunspot
                    value (90 day average count). This results in hundreds of
                    IV-DV pairs ready to be inputted into the machine learning
                    model. To train the model on pre-existing data, we had to
                    divide our IV-DV pairs into a training set and testing set.
                    This way, after the model learns correlations within the
                    training set, we can apply it to the testing set to gauge
                    how accurate it is. It is common practice to use a 80-20
                    split, so 80% of the total data was randomly selected to
                    train on, while the remaining 20% was set aside for later
                    use.
                </div>
                <Picture
                    rawpicture="/images/method/split.png"
                    name="Train-test Split"
                />
                <div className="text-content">
                    <b>Step 6 - Building Neural Network Infrastructure</b>
                    <br></br>A feed-forward dense neural network was implemented
                    using Tensorflow due to its ability to create complex
                    mathematical correlations between variables. 6 layers of
                    nodes were created, cascading from 2048 to 1 node per layer.
                    These values were achieved through repeatedly fine-tuning
                    model hyperparameters to minimize error.
                </div>
                <Picture
                    rawpicture="/images/method/summary.png"
                    name="Neural Network Infrastructure Summary"
                />
                <div className="text-content">
                    <b>Step 7 - Model Overfit Prevention</b>
                    <br></br>
                    Overfitting of a machine learning model occurs when the
                    training set is overanalyzed to the point that nothing
                    outside the training set is accurately predicted. Using too
                    many epochs (iterations) usually leads to overfitting,
                    however, using too few epochs leads to underfitting. To
                    properly fit our model, we implement an Early Stopping
                    algorithm relying on an accuracy metric known as loss. Our
                    model is initialized with a large number of epochs, and the
                    loss for each epoch is tracked. Once the loss reaches a
                    minimum, the model stops early, finishes training, and
                    optimizes the fit.
                </div>
                <div className="subtitle">
                    Part III: Distant Star Activity Prediction
                </div>
                <div className="text-content">
                    <b>Step 8 - Predicting Stellar Activity of Distant Stars</b>
                    <br></br>
                    The now-complete model is ready to be applied onto distant
                    stars. Surface velocity data for stars light years away is
                    nonexistent, so we must rely solely on luminosity data in
                    the form of light curves. Space telescopes such as Kepler
                    and TESS constantly provide us with light data from distant
                    stars, allowing for mass application of our model.
                    Preprocessing Steps 3 and 4 were repeated on the light curve
                    data, and then input into the model created in Steps 5 and
                    6. The resulting graph is representative of the distant
                    star’s stellar activity over time.
                </div>
                <Picture
                    rawpicture="/images/method/activity.png"
                    name="Predicted Stellar Activity from Distant Star"
                />
                <div className="subtitle">Method Overview</div>
                <Picture
                    rawpicture="/images/method/overview.gif"
                    name="Animated Overview of Method"
                    size="is-large"
                />
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Method;
