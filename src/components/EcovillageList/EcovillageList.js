import React from 'react';
import EcovillageListItem from './EcovillageListItem';

import './styles.scss';

class EcovillageList extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){

        const ecovillages = this.props.ecovillages.map((ecovillage, index) =>
            <EcovillageListItem
                key={index}
                index={index}
                ecovillage={ecovillage}
            />
        );

        return (
            <section className="grid-items">
                {ecovillages}
            </section>
        );
    }
}

export default EcovillageList;
