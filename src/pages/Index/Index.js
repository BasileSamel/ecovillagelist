import React from 'react';

import EcovillageList from '../../components/EcovillageList/EcovillageList';
import FiltersPanel from './FiltersPanel/FiltersPanel';
import ecovillages from '../../ecovillages.json';

class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ecovillages: this.props.ecovillages,
            filters:{ continent: {
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
            }}
        };

        this.selectContinent = this.selectContinent.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
        this.selectScope = this.selectScope.bind(this);

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

    applyFilters(){
        let filtered_ecovillages = ecovillages.slice(0);
        const filters = this.state.filters;
        for(var filter in filters){
            if(filters[filter].value != filters[filter].default){
                filtered_ecovillages = filtered_ecovillages.filter(
                    ecovillage => {
                        // console.log(filters[filter].name);

                        let param = ecovillage[filters[filter].name];
                        if(filters[filter].name == 'scope'){
                            return ecovillage[filters[filter].value];
                        }

                        if(Array.isArray(param)){
                            return param.indexOf(filters[filter].value) != -1;
                        } else {
                            return param === filters[filter].value;
                        }
                    });
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
