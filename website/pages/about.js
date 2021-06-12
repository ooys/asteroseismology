import Navbar from "/components/Navbar.js";
import Sun from "/components/Sun.js";
import Footer from "/components/Footer.js";
import Profile from "../components/Profile";

function About() {
    return (
        <div className="about">
            <Sun />
            <Navbar back="true" />
            <div className="text-wrapper">
                <div className="title">Researchers</div>

                <br></br>

                <div className="profiles">
                    <div className="columns is-8 is-multiline is-centered">
                        <Profile
                            name="Yihong Song"
                            position="Student"
                            origin="Riverside High School & Academies of Loudoun '22"
                            location="Ashburn, Virginia, United States"
                            picture="/images/profile/y_song.jpg"
                            email="michaelsong4399@gmail.com"
                            discord="michaelsong4399#2750"
                            github="https://github.com/michaelsong4399"
                        />
                        <Profile
                            name="Rohit Prasanna"
                            position="Student"
                            origin="Briar Woods High School & Academies of Loudoun '22"
                            location="Ashburn, Virginia, United States"
                            picture="/images/profile/r_prasanna.png"
                            email="rohit.prasanna1@gmail.com"
                            discord="goopfrey#3844"
                            github="https://github.com/ropunch04"
                        />
                        <Profile
                            name="Narim Kim"
                            position="Student"
                            origin="Daegu Science High School '22"
                            location="Daegu, South Korea"
                            picture="/images/profile/n_kim.png"
                            email="artkim817@gmail.com"
                            // discord="michaelsong4399#2750"
                            // github="https://github.com/michaelsong4399"
                        />
                        <Profile
                            name="Haesol Yoon"
                            position="Student"
                            origin="Daegu Science High School '22"
                            location="Daegu, South Korea"
                            picture="/images/profile/h_yoon.png"
                            email="hsyoon629@gmail.com"
                            // discord="goopfrey#3844"
                        />
                    </div>
                </div>
                <div className="title">Collaborators</div>
                <br></br>
                <div className="profiles">
                    <div className="columns is-8 is-multiline is-centered">
                        <Profile
                            name="Thierry Appourchaux"
                            position="Staff Scientist, Helioseismology Research Director"
                            origin="Institut d'Astrophysique Spatiale & European Space Agency"
                            location="Bures-sur-Yvette, France"
                            picture="/images/profile/t_appourchaux.png"
                            email="thierry.appourchaux@ias.u-psud.fr"
                        />
                        <Profile
                            name="Duke M. Writer"
                            position="Research Mentor"
                            origin="Academies of Loudoun"
                            location="Ashburn, Virginia, United States"
                            picture="/images/profile/d_writer.png"
                            email="dwriter@email.virginia.edu"
                        />
                        <Profile
                            name="Jeremy D. Schnittman"
                            position="Research Astrophysicist"
                            origin="NASA Goddard Space Flight Center"
                            location="Greenbelt, Maryland, United States"
                            picture="/images/profile/j_schnittman.png"
                            email="schnittman@gmail.com"
                        />
                        <Profile
                            name="Ron Musick"
                            position="Researcher, Machine Learning"
                            // origin="Riverside High School '22"
                            // picture="/images/profile/y_song.jpg"
                            email="rmusick@gmail.com"
                        />
                    </div>
                </div>
                <div className="footer_wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default About;
