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

function Results() {
    return (
        <div className="results">
            <Sun />
            <Navbar back="true" />
            <div className="text-wrapper">
                <div className="title">Results</div>
                <div className="text-content">
                    The first major milestone in our project is the creation of
                    a functional machine learning model capable of correlating
                    oscillation modes to stellar activity. Out of the many
                    networks we attempted, a Feed-Forward Dense Neural Network
                    (DNN) provided us with optimal results. After fine tuning
                    hyperparameters within this model, we constructed 6 layers
                    with nodes cascading from 2048 to 1 node per layer. A
                    simplified form of this neural network structure is
                    displayed below.
                </div>
                <Picture
                    rawpicture="/images/results/network.png"
                    name="Feed-forward Neural Network Structure, Simplified"
                />
                <Picture
                    rawpicture="/images/results/trend.png"
                    name="Correlation of Predicted Solar Activity (Blue and Red) to Detected Sunspot Number (Green)"
                />
                {/* <div className="subtitle"></div> */}
                <div className="text-content">
                    However, our model was solely trained on data from the Sun.
                    To truly claim that our model is able to predict stellar
                    activity, it must be applied to distant stars. Other studies
                    predicting the stellar activity of distant stars, such as
                    Mathur et al. (2014), are limited in their range and come
                    from a purely theoretical basis without a data-driven
                    backbone. Nevertheless, by applying our model to a star
                    analyzed by Mathur and her team (who used wavelet analysis),
                    we see that the peaks and troughs align throughout the
                    observed time period, indicating an agreement in both
                    models. Our model has proven to be effective on both the Sun
                    and distant stars, so mass application is now possible.
                </div>
                <Picture
                    rawpicture="/images/results/correlation.png"
                    name="Stellar Activity of KIC 7206837 - Our Prediction (Red), Mathur et al. Prediction (Purple)"
                />
                <div className="text-content">
                    In the 3 Variable Star graphs, the stellar activity trends
                    are very chaotic, which can be attributed to the variable
                    nature of those stars. On the contrary, the Hot Subdwarf
                    graphs are not variable and have periods of very low solar
                    activity. This behavior can be attributed to the old age of
                    the star, where it begins to fuse heavier elements and is
                    not as reactive.
                </div>
                <div className="text-content">
                    The main takeaway from this is that our model provides
                    consistent stellar activity trends across all stars of a
                    specific type, allowing us to characterize the type of star
                    solely from its light curve.In the future, our model can be
                    applied onto a vast number of stars with the purpose of
                    classification and characterization. Understanding stellar
                    activity similarities between our Sun and other stars is
                    vital in the search for habitable planets, marking this
                    research a monumental step forward in the astrophysical and
                    machine learning community.
                </div>
                <div className="picture-frame">
                    <div className="columns is-multiline is-gapless">
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p1.png"
                                alt="p1"
                            />
                        </LazyLoad>
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p2.png"
                                alt="p2"
                            />
                        </LazyLoad>
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p3.png"
                                alt="p3"
                            />
                        </LazyLoad>
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p4.png"
                                alt="p4"
                            />
                        </LazyLoad>
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p5.png"
                                alt="p5"
                            />
                        </LazyLoad>
                        <LazyLoad className="column is-one-third" once={true}>
                            <img
                                className="background-picture"
                                src="/images/results/p6.png"
                                alt="p6"
                            />
                        </LazyLoad>
                    </div>
                    <div className="media-title">
                        Stellar Activity - Rotationally Variable Stars (top),
                        Hot Subdwarf Stars (bottom)
                    </div>
                </div>
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Results;
