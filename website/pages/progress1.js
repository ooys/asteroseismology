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
                <div className="title">Contacts: Tuesday November 16, 2021</div>
                <div className="text-content">
                    Contacted Astronomer Jeff Mangum, who provided three
                    additional contacts.
                    <ol>
                        <li>
                            Michael Lam (mtlsps@rit.edu), Rochester Institute of
                            Technology
                        </li>
                        <li>Paul Demorest (pdemores@nrao.edu), NRAO</li>
                        <li>
                            Socorro Scott Ransom (sransom@nrao.edu), NRAO
                            Charlottesville
                        </li>
                    </ol>
                </div>
                <div className="title">
                    Data Preprocessing: Saturday November 20, 2021
                </div>
                <div className="subtitle">Kepler Datasets</div>
                <div className="text-content">
                    <a href="https://archive.stsci.edu/kepler/kepler_fov/search.php">
                        All KIC Stars
                    </a>
                    <br></br>
                    <a href="https://archive.stsci.edu/kepler/kepler_fov/help/search_help.html#kic_seasons">
                        KIC Search Help
                    </a>
                    <br></br>
                    <a href="https://archive.stsci.edu/kepler/data_search/search.php">
                        All Light Curve Files Search
                    </a>
                    <br></br>
                    <a href="https://archive.stsci.edu/search_fields.php?mission=kepler_fov">
                        Search Help
                    </a>
                    <br></br>
                    <a href="http://docs.lightkurve.org/tutorials/1-getting-started/searching-for-data-products.html">
                        Lightkurve Data Pipeline Guide
                    </a>
                </div>
                <div className="subtitle">
                    SIMBAD Datasets for Star Classification
                </div>
                <div className="text-content">
                    <a href="http://simbad.u-strasbg.fr/simbad/sim-fsam">
                        Kepler Datasets Simbad
                    </a>
                    <br></br>
                    <a href="https://astroquery.readthedocs.io/en/latest/simbad/simbad.html">
                        Astroquery
                    </a>
                    <br></br>
                    <a href="​​https://simbad.u-strasbg.fr/simbad/sim-display">
                        Simbad Classification Table
                    </a>
                </div>

                <div className="subtitle">
                    Part 1 - Star characteristic prediction
                </div>
                <div className="text-content">
                    Step 1: In KIC - download all star statistics
                    <br></br>
                    <br></br>
                    Search Query: <br></br>
                    Data Availability = 2 (Has Archived Data) <br></br>
                    Star/Gal_ID = 0 (Star)
                    <br></br>
                    <br></br>
                    Data Labels:<br></br>
                    Kepler_ID<br></br>
                    2MASS_ID<br></br>
                    Var._ID = Variable Star ID<br></br>
                    Teff = Effective Temperature<br></br>
                    Metallicity<br></br>
                    E(B-V)<br></br>
                    A_V<br></br>
                    Radius<br></br>
                    Photometry_Qual<br></br>
                    Astrophysics_Qual<br></br>
                    <br></br>
                    <br></br>
                    Downloaded: <br></br>
                    191449 KIC targets with labels (Astrophysics Qual = 6)
                    <br></br>
                    14693 KIC targets w/o labels (Astrophysics Qual = 0)
                </div>
                <div className="text-content">
                    Step 2: Download all light curves of max quarter length
                    <br></br>
                    Split into each quarter, normalize, remove outliers<br></br>
                    Fast fourier transform for frequencies 1-48/day, in
                    increments of 0.01 and binned by mean in stacks of 10
                    <br></br>Result: 470 frequency-power data points per quarter
                </div>

                <Picture
                    rawpicture="/images/background-new/bison-lightcurve2.png"
                    name="Light Curve Sample, Fourier Transformed"
                />

                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Background;
