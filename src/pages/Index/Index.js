import React from 'react';

import EcovillageList from '../../components/EcovillageList/EcovillageList';
import FiltersPanel from './FiltersPanel/FiltersPanel';
import ecovillages from '../../ecovillages.json';

class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ecovillages: this.props.ecovillages,
            filters:{
                continent: {
                    name: "continent",
                    value: "Continent",
                    default: "Continent"
                }, languages: {
                    name: "languages",
                    value: "Language",
                    default: "Language"
                }, scope:{
                    name: "scope",
                    value: "Scope",
                    default: "Scope"
                }, lodging:{
                    name: "lodging",
                    value: "Lodging",
                    default: "Lodging"
                }, open_to:{
                    name: "open_to",
                    value: "Open to",
                    default: "Open to"
                }, landscape: {
                    name: "landscape",
                    value: 'Landscape',
                    default: 'Landscape'
                }, resources: {
                    name: "resources",
                    value: "Resources",
                    default: "Resources"
                }, amenities: [
                    {name: 'cellphone_service', value: false},
                    {name: 'internet', value: false},
                    {name: 'community_farm_garden', value: false},
                    {name: 'gym_sports_facilities', value: false},
                    {name: 'large_scale_kitchen', value: false},
                    {name: 'library', value: false},
                    {name: 'play_areas', value: false},
                    {name: 'swimming_pond_pool', value: false}
                ], governance: [
                    {name: 'income_sharing', value: false},
                    {name: 'self_governance', value: false}
                ]
            }
        };

        this.selectContinent = this.selectContinent.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
        this.selectScope = this.selectScope.bind(this);
        this.selectLodging = this.selectLodging.bind(this);
        this.selectOpenTo = this.selectOpenTo.bind(this);
        this.selectLandscape = this.selectLandscape.bind(this);
        this.selectResources = this.selectResources.bind(this);
        this.onAmenitiesChange = this.onAmenitiesChange.bind(this);
        this.onGovernanceChange = this.onGovernanceChange.bind(this);

        this.applyFilters = this.applyFilters.bind(this);
    }

    selectContinent(e){
        const continent = e.target.value;
        let filters = this.state.filters;
        filters.continent.value = continent;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectLanguage(e){
        const language = e.target.value;
        let filters = this.state.filters;
        filters.languages.value = language;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectScope(e){
        const scope = e.target.value;
        let filters = this.state.filters;
        filters.scope.value = scope;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectLodging(e){
        const lodging = e.target.value;
        let filters = this.state.filters;
        filters.lodging.value = lodging;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectOpenTo(e){
        const open_to = e.target.value;
        let filters = this.state.filters;
        filters.open_to.value = open_to;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectLandscape(e){
        const landscape = e.target.value;
        let filters = this.state.filters;
        filters.landscape.value = landscape;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    selectResources(e){
        const resources = e.target.value;
        let filters = this.state.filters;
        filters.resources.value = resources;
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    onAmenitiesChange(e){
        const amenity_name = e.target.name;
        let filters = this.state.filters;
        filters.amenities = filters.amenities.map(amenity => {
            if(amenity.name == amenity_name){
                amenity.value = !amenity.value;
            }
            return amenity;
        });
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    onGovernanceChange(e){
        const name = e.target.name;
        let filters = this.state.filters;
        filters.governance = filters.governance.map(option => {
            if(option.name == name){
                option.value = !option.value;
            }
            return option;
        });
        this.setState({
            filters: filters
        }, this.applyFilters);
    }

    applyFilters(){
        let filtered_ecovillages = ecovillages.slice(0);
        const filters = this.state.filters;
        for(var filter in filters){
            const current_filter = filters[filter];
            if(current_filter.value){
                if(current_filter.value != current_filter.default){
                    filtered_ecovillages = filtered_ecovillages.filter(
                        ecovillage => {
                            // console.log(filters[filter].name);

                            let param = ecovillage[current_filter.name];
                            let special_params = ['scope', 'lodging', 'open_to', 'landscape', 'resources'];
                            if(special_params.includes(current_filter.name)){
                                return ecovillage[current_filter.value];
                            }
                            // let checkbox_params = ['amenities'];
                            // if(checkbox_params.includes(filters[filter].name)){
                            //     // return ecovillage[filters[filter].value];
                            // }

                            if(Array.isArray(param)){
                                return param.indexOf(current_filter.value) != -1;
                            } else {
                                return param === current_filter.value;
                            }
                        });
                    }
            }
            if(Array.isArray(current_filter)){
                for(var field in current_filter){
                    const current_field = current_filter[field];
                    if(current_field.value){
                        filtered_ecovillages = filtered_ecovillages.filter(ecovillage => ecovillage[current_field.name]);
                    }
                }
            }
        }
        this.setState({
            ecovillages: filtered_ecovillages
        });
    }

    render(){


        return (
            <>
            <section className="hero">
                <div className="container flex center columns">
                    <h2>Find <strong>your</strong> ecovillage</h2>
                    <p>Browse, be inspired, fight climate change.</p>
                </div>
            </section>

            <main className="flex-grow">
                <div className="container grid-sc">
                    <aside>
                        <FiltersPanel
                            selectContinent={this.selectContinent}
                            selectLanguage={this.selectLanguage}
                            selectScope={this.selectScope}
                            selectLodging={this.selectLodging}
                            selectOpenTo={this.selectOpenTo}
                            selectLandscape={this.selectLandscape}
                            selectResources={this.selectResources}
                            onAmenitiesChange={this.onAmenitiesChange}
                            onGovernanceChange={this.onGovernanceChange}
                            filters={this.state.filters}
                        />
                    </aside>

                    <EcovillageList
                        ecovillages={this.state.ecovillages}
                    />

                </div>
            </main>
            </>
        );
    }
}

export default Index;
