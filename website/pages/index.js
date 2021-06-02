import Sun from "/components/Sun.js";

function Home() {
    return (
        <>
            <Sun />
            <div className="wrapper">
                <div className="tracker">
                    <div className="section is-large">
                        <div>The Sun</div>
                    </div>
                    <div className="section is-large">
                        <div>Other Stars.</div>
                    </div>
                    <div className="section is-large">
                        <div>Our Techniques</div>
                    </div>

                    <div className="section is-large">
                        <div>Our Results</div>
                    </div>

                    <div className="section is-large">
                        <div>Data and Collaborations</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
