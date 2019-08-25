import React from 'react';

class FiltersPanel extends React.Component {
    render(){
        return (
            <ul id="main-filters">
                <li>
                    <h4>Location</h4>
                    <select id="selectContinent" onChange={this.props.selectContinent} value={this.props.filters.continent.value}>
                        <option>Continent</option>
                        <option>Africa</option>
                        <option>Asia</option>
                        <option>Australia/Oceania</option>
                        <option>Europe</option>
                        <option>North America</option>
                        <option>South America</option>
                    </select>
                    {/*
                    <select id="selectCountry" onChange={this.props.selectCountry} value={this.props.filters.country}>
                        <option>Country</option>
                        <option>Africa</option>
                        <option>Asia</option>
                        <option>Australia/Oceania</option>
                        <option>Europe</option>
                        <option>North America</option>
                        <option>South America</option>
                    </select>
                    */}
                </li>
                <li>
                    <h4>Demographics</h4>

                    <select
                        id="selectLanguage"
                        onChange={this.props.selectLanguage}
                        value={this.props.filters.languages.value}>
                        <option>Language</option>
                        <option>English</option>
                        <option>French</option>
                        <option>Portuguese</option>
                        <option>Spanish</option>
                    </select>


                    {/*
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
                    */}

                    <label for="residents">Residents</label>
                    {/*
                    <div className="flex v-center">
                        <input type="range" name="residents" id="residents" min="1" max="300" value="300"
                            oninput="residentsOutput.value = residents.value"/>
                        <output name="residentsOutput" id="residentsOutput">300</output>
                    </div>
                    */}
                </li>
                <li>
                    <h4>Scope</h4>

                    <select id="selectScope"
                        onChange={this.props.selectScope}
                        value={this.props.filters.scope.value}
                    >
                        <option>Scope</option>
                        <option value="education">Education</option>
                        <option value="research">Research</option>
                        <option value="art">Art</option>
                        <option value="spiritual">Spiritual</option>
                        <option value="religious">Religious</option>
                    </select>

                </li>
                <li>
                    <h4>Landscape</h4>

                    <select id="selectLandscape"
                        onChange={this.props.selectLandscape}
                        value={this.props.filters.landscape.value}
                        >
                        <option>Landscape</option>
                        <option value="urban">Urban</option>
                        <option value="semi_urban">Semi-urban</option>
                        <option value="rural">Rural</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    {/*
                    <label for="selectUrban"><input type="checkbox" id="selectUrban"/>Urban</label>
                    <label for="selectSemiUrban"><input type="checkbox" id="selectSemiUrban"/>Semi-urban</label>
                    <label for="selectRural"><input type="checkbox" id="selectRural"/>Rural</label>
                    <label for="selectMobile"><input type="checkbox" id="selectMobile"/>Mobile</label>
                    */}
                </li>
                <li>
                    <h4>Lodging</h4>

                    <select
                        id="selectLodging"
                        onChange={this.props.selectLodging}
                        value={this.props.filters.lodging.value}
                    >
                        <option>Lodging</option>
                        <option value="cohousing">Cohousing</option>
                        <option value="shared_housing">Shared housing</option>
                        <option value="building_lots">Building lots</option>
                        <option value="camping">Camping</option>
                    </select>
                </li>
                <li>
                    <h4>Open to</h4>

                    <select
                        id="selectOpenTo"
                        onChange={this.props.selectOpenTo}
                        value={this.props.filters.open_to.value}
                    >
                        <option>Open to</option>
                        <option value="visitors">Visitors</option>
                        <option value="new_members">New members</option>
                        <option value="volunteers">Volunteers</option>
                    </select>

                </li>
                <li>
                    <h4>Resources</h4>

                    <a className="toggle" href="#selectResources">Toggle options</a>
                    <div className="toggle-content" id="selectResources">
                    <select
                        id="selectResources"
                        onChange={this.props.selectResources}
                        value={this.props.filters.resources.value}
                    >
                        <option>Resources</option>
                        <option value="self_or_shared_food_production">Self or shared food production</option>
                        <option value="renewable_energy">Renewable energy</option>
                    </select>
                    </div>

                    {/*
                        <label><input type="checkbox"/>Self or shared food production</label>
                        <label><input type="checkbox"/>Renewable energy</label>
                    */}
                </li>
                <li>
                    <h4>Amenities</h4>


                    <a className="toggle" href="#selectAmenities">Toggle options</a>
                    <div className="toggle-content" id="selectAmenities">
                        <label><input
                            type="checkbox"
                            name="cellphone_service"
                            checked={this.props.filters.amenities[0].value}
                            onChange={this.props.onAmenitiesChange}
                        />Cellphone service</label>
                        <label><input
                            type="checkbox"
                            name="internet"
                            checked={this.props.filters.amenities[1].value}
                            onChange={this.props.onAmenitiesChange}
                        />Internet</label>
                        <label><input
                            type="checkbox"
                            name="community_farm_garden"
                            checked={this.props.filters.amenities[2].value}
                            onChange={this.props.onAmenitiesChange}
                        />Community farm/garden</label>
                        <label><input
                            type="checkbox"
                            name="gym_sports_facilities"
                            checked={this.props.filters.amenities[3].value}
                            onChange={this.props.onAmenitiesChange}
                        />Gym/sports facilities</label>
                        <label><input
                            type="checkbox"
                            name="large_scale_kitchen"
                            checked={this.props.filters.amenities[4].value}
                            onChange={this.props.onAmenitiesChange}
                        />Large scale kitchen</label>
                        <label><input
                            type="checkbox"
                            name="library"
                            checked={this.props.filters.amenities[5].value}
                            onChange={this.props.onAmenitiesChange}
                        />Library</label>
                        <label><input
                            type="checkbox"
                            name="play_areas"
                            checked={this.props.filters.amenities[6].value}
                            onChange={this.props.onAmenitiesChange}
                        />Play areas</label>
                        <label><input
                            type="checkbox"
                            name="swimming_pond_pool"
                            checked={this.props.filters.amenities[7].value}
                            onChange={this.props.onAmenitiesChange}
                        />Swimming pond/pool</label>
                    </div>

                </li>
                <li>
                    <h4>Status</h4>

                    {/*
                    <a className="toggle" href="#selectStatus">Toggle options</a>
                    <div className="toggle-content" id="selectStatus">
                        <label><input type="checkbox"/>Forming</label>
                        <label><input type="checkbox"/>Established</label>
                        <label><input type="checkbox"/>Founded in</label>
                        //TODO double range input for founded 1960-current year
                        <label><input type="checkbox"/>Disbanded</label>
                    </div>
                    */}
                </li>
                <li>
                    <h4>Governance</h4>

                    <a className="toggle" href="#selectGovernance">Toggle options</a>
                    <div className="toggle-content" id="selectGovernance">
                        <label><input
                            type="checkbox"
                            name="income_sharing"
                            checked={this.props.filters.governance[0].value}
                            onChange={this.props.onGovernanceChange}
                        />Income-sharing</label>
                        <label><input
                            type="checkbox"
                            name="self_governance"
                            checked={this.props.filters.governance[1].value}
                            onChange={this.props.onGovernanceChange}
                        />Self-governance</label>
                    </div>
                </li>
                <li>
                    <h4>Built Environment</h4>


                    <a className="toggle" href="#selectBuiltEnv">Toggle options</a>
                    <div className="toggle-content" id="selectBuiltEnv">
                        <label><input
                            type="checkbox"
                            name="natural"
                            checked={this.props.filters.built_env[0].value}
                            onChange={this.props.onBuiltEnvChange}
                        />Natural Building</label>
                        <label><input
                            type="checkbox"
                            name="green"
                            checked={this.props.filters.built_env[1].value}
                            onChange={this.props.onBuiltEnvChange}
                        />Green Building</label>
                    </div>

                </li>
            </ul>
        );
    }
}

export default FiltersPanel;
