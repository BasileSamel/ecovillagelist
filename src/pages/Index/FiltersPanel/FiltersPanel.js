import React from 'react';

class FiltersPanel extends React.Component {
    render(){
        return (
            <ul id="main-filters">
                <li>
                    <h4>Location</h4>
                    <select id="selectContinent" onChange={this.props.selectContinent} value={this.props.filters.continent}>
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
                        <option>Dietary Restrictions</option>
                        <option>Omnivorous</option>
                        <option>Paleo</option>
                        <option>Local</option>
                        <option>Organic</option>
                        <option>GMO Free</option>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                        <option>Opportunivore</option>
                        <option>Raw</option>
                        <option>Kosher</option>
                        <option>Halal</option>
                        <option>Dairy-free</option>
                        <option>Gluten-free</option>
                    </select>

                    <label for="residents">Residents</label>
                    <div className="flex v-center">
                        <input type="range" name="residents" id="residents" min="1" max="300" value="300"
                            oninput="residentsOutput.value = residents.value"/>
                        <output name="residentsOutput" id="residentsOutput">300</output>
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
                    <label for="selectMobile"><input type="checkbox" id="selectMobile"/>Mobile</label>
                </li>
                <li>
                    <h4>Lodging</h4>
                    <select id="selectLodging">
                        <option>Cohousing</option>
                        <option>Shared housing</option>
                        <option>Building lots</option>
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
                        <label><input type="checkbox"/>Self or shared food production</label>
                        <label><input type="checkbox"/>Renewable energy</label>
                    </div>
                </li>
                <li>
                    <h4>Amenities</h4>
                    <a className="toggle" href="#selectAmenities">Toggle options</a>
                    <div className="toggle-content" id="selectAmenities">
                        <label><input type="checkbox"/>Cellphone service</label>
                        <label><input type="checkbox"/>Internet</label>
                        <label><input type="checkbox"/>Community farm/garden</label>
                        <label><input type="checkbox"/>Gym/sports facilities</label>
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
                        //TODO double range input for founded 1960-current year
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
        );
    }
}

export default FiltersPanel;