import React from 'react';
import { Link } from "react-router-dom";

class EcovillageListItem extends React.Component {
    _toSlug(ecovillage){
        const name = ecovillage.name;
        const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
        const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
        const p = new RegExp(a.split('').join('|'), 'g');

        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w-]+/g, '') // Remove all non-word characters
            .replace(/--+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    }

    render(){
        return (
            <Link to={"/" + this._toSlug(this.props.ecovillage)}>
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
