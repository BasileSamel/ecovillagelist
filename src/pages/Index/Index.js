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
                continent: ""
            }
        };

        this.selectContinent = this.selectContinent.bind(this);
    }

    selectContinent(e){
        const continent = e.target.value;
        let filters = this.state.filters;
        filters.continent = continent;
        let filtered_ecovillages = ecovillages;
        if(continent != "Continent"){
            filtered_ecovillages = filtered_ecovillages.filter(ecovillage => ecovillage.continent === continent);
        }
        this.setState({
            ecovillages: filtered_ecovillages,
            filters: filters
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
