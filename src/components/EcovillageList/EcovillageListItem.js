import React from 'react';
import { Link } from "react-router-dom";

class EcovillageListItem extends React.Component {
    render(){
        return (
            <Link to={"/" + this.props.ecovillage.slug}>
                <img src={this.props.ecovillage.picture} alt=""/>
                <div>
                    <h3>{this.props.ecovillage.name}</h3>
                    {this.props.ecovillage.city}, {this.props.ecovillage.country}
                </div>
            </Link>
        );
    }
}

export default EcovillageListItem;
