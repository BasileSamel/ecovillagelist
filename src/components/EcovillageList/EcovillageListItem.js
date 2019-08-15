import React from 'react';
import { Link } from "react-router-dom";

class EcovillageListItem extends React.Component {
    render(){
        return (
            <Link to={"/" + this.props.ecovillage.slug}>
                <figure>
                    <img src={this.props.ecovillage.picture} alt=""/>
                </figure>
                <div>
                    <h3>{this.props.ecovillage.name}</h3>
                    {this.props.ecovillage.country}, {this.props.ecovillage.continent}
                </div>
            </Link>
        );
    }
}

export default EcovillageListItem;
