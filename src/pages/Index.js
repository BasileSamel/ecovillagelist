import React from 'react';

class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <>
            <section className="hero">
                <div className="container flex center columns">
                    <h2>Find <strong>your</strong> ecovillage</h2>
                    <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                </div>
            </section>

            <main className="flex-grow">
                <div className="container grid-sc">
                    <aside>
                        <ul id="main-filters">
                            <li>
                                <h4>Location</h4>
                                <select id="selectContinent">
                                    <option>Continent</option>
                                    <option>Africa</option>
                                    <option>Asia</option>
                                    <option>Australia/Oceania</option>
                                    <option>Europe</option>
                                    <option>North America</option>
                                    <option>South America</option>
                                </select>
                                <select id="selectCountry">
                                    <option>Country</option>
                                    <option>Africa</option>
                                    <option>Asia</option>
                                    <option>Australia/Oceania</option>
                                    <option>Europe</option>
                                    <option>North America</option>
                                    <option>South America</option>
                                </select>
                            </li>
                            <li>
                                <h4>Demographics</h4>
                                <select id="selectLanguage">
                                    <option>Language</option>
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Portuguese</option>
                                    <option>Spanish</option>
                                </select>

                                <select id="selectDiet">
                                    <option>Dietary Preferences</option>
                                    <option>Omnivorous</option>
                                    <option>Paleo</option>
                                    <option>Local</option>
                                    <option>Vegetarian</option>
                                    <option>Vegan</option>
                                </select>

                                <label for="inhabitants">Inhabitants</label>
                                <div className="flex v-center">
                                    <input type="range" name="inhabitants" id="inhabitants" min="1" max="300" value="300"
                                        oninput="inhabitantsOutput.value = inhabitants.value"/>
                                    <output name="inhabitantsOutput" id="inhabitantsOutput">300</output>
                                </div>

                                <label for="age">Age</label>
                                <div className="flex v-center">
                                    <input type="range" name="age" id="age" min="1" max="100" value="100"
                                        oninput="ageOutput.value = age.value"/>
                                    <output name="ageOutput" id="ageOutput">100</output>
                                </div>
                            </li>
                            <li>
                                <h4>Scope</h4>
                                <select id="selectScope">
                                    <option>Education</option>
                                    <option>Research</option>
                                    <option>Art</option>
                                    <option>Spiritual</option>
                                    <option>Religious</option>
                                </select>
                            </li>
                            <li>
                                <h4>Landscape</h4>
                                <label for="selectUrban"><input type="checkbox" id="selectUrban"/>Urban</label>
                                <label for="selectSemiUrban"><input type="checkbox" id="selectSemiUrban"/>Semi-urban</label>
                                <label for="selectRural"><input type="checkbox" id="selectRural"/>Rural</label>
                            </li>
                            <li>
                                <h4>Lodging</h4>
                                <select id="selectLodging">
                                    <option>Cohousing</option>
                                    <option>Camping</option>
                                </select>
                            </li>
                            <li>
                                <h4>Open to</h4>
                                <select id="selectOpenTo">
                                    <option>Visitors</option>
                                    <option>New members</option>
                                    <option>Volunteers</option>
                                </select>
                            </li>
                            <li>
                                <h4>Resources</h4>
                                <a className="toggle" href="#selectResources">Toggle options</a>
                                <div className="toggle-content" id="selectResources">
                                    <label><input type="checkbox"/>Self-produced food</label>
                                    <label><input type="checkbox"/>Renewable energy</label>
                                </div>
                            </li>
                            <li>
                                <h4>Amenities</h4>
                                <a className="toggle" href="#selectAmenities">Toggle options</a>
                                <div className="toggle-content" id="selectAmenities">
                                    <label><input type="checkbox"/>Cellphone service</label>
                                    <label><input type="checkbox"/>Internet</label>
                                    <label><input type="checkbox"/>Community farm</label>
                                    <label><input type="checkbox"/>Gym/sports facilities</label>
                                    <label><input type="checkbox"/>Healthcare facilities</label>
                                    <label><input type="checkbox"/>Large scale kitchen</label>
                                    <label><input type="checkbox"/>Library</label>
                                    <label><input type="checkbox"/>Play areas</label>
                                    <label><input type="checkbox"/>Swimming pond/pool</label>
                                </div>
                            </li>
                            <li>
                                <h4>Status</h4>
                                <a className="toggle" href="#selectStatus">Toggle options</a>
                                <div className="toggle-content" id="selectStatus">
                                    <label><input type="checkbox"/>Forming</label>
                                    <label><input type="checkbox"/>Established</label>
                                    <label><input type="checkbox"/>Founded in</label>
                                    <label><input type="checkbox"/>Disbanded</label>
                                </div>
                            </li>
                            <li>
                                <h4>Governance</h4>
                                <a className="toggle" href="#selectGovernance">Toggle options</a>
                                <div className="toggle-content" id="selectGovernance">
                                    <label><input type="checkbox"/>Income-sharing</label>
                                    <label><input type="checkbox"/>Self-governance</label>
                                </div>
                            </li>
                            <li>
                                <h4>Built Environment</h4>
                                <a className="toggle" href="#selectBuiltEnv">Toggle options</a>
                                <div className="toggle-content" id="selectBuiltEnv">
                                    <label><input type="checkbox"/>Natural Building</label>
                                    <label><input type="checkbox"/>Green Building</label>
                                </div>
                            </li>
                        </ul>
                    </aside>

                    <section className="grid-items">
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Somewhere Nice</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Ecovillage FTW</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>A village that is eco</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Naming ecovillages is hard</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Because they're fictitious</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>And it's 4:30AM</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Black Mirror</h3>
                                Location, Country
                            </div>
                        </div>
                        <div>
                            <img src="placeholders/placeholder.jpg" alt=""/>
                            <div>
                                <h3>Superheroes Ecovillage</h3>
                                Location, Country
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="grid">
                <div className="flex-grow">Created with <span role="img" aria-label="heart">💚️</span> by <a href="https://basilesamel.com/">Basile</a> &middot;
                    <a href="https://patriciapires.github.io/">Patricia</a> &middot; <a href="https://miguelpiedrafita.com/">Miguel</a>
                    &middot; <a href="https://sava.io/">Alina</a></div>
                <div><a href="https://twitter.com/EcovillageList">Twitter</a> &mdash; <a href="/privacy">Privacy</a></div>
            </footer>
            </>
        );
    }
}

export default Index;
