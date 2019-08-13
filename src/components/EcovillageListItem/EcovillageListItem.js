import React from 'react';

class EcovillageListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <div>
                <img src={this.props.ecovillage.picture} alt=""/>
                <div>
                    <h3>{this.props.ecovillage.name}</h3>
                    {this.props.ecovillage.city}, {this.props.ecovillage.country}
                </div>
            </div>
        );
    }
}

export default EcovillageListItem;
