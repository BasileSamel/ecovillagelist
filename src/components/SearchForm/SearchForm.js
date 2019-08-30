import React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';

class SearchForm extends React.Component {
    render(){

        const results = this.props.search_result.map(result =>
            <li>
                <Link
                    to={"/" + result.slug}
                    onClick={this.props.onClick}
                >
                {result.name}
                </Link>
            </li>
        );

        return (
            <form role="search" className="search-form" onSubmit={this.props.onSubmit}>
                <input
                    type="search"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />

                <input type="submit" value=""/>

                { this.props.search_result.length > 0 &&
                <div className="search-results">
                    <ul>{results}</ul>
                </div>
                }
            </form>
        )
    }
}

export default SearchForm;
