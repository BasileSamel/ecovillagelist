import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ecovillages = [{
    name: "Somewhere Nice",
    slug: "somewhere-nice",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Ecovillage FTW",
    slug: "ecovillage-ftw",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "A village that is eco",
    slug: "a-village-that-is-eco",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Naming ecovillages is hard",
    slug: "naming-ecovillages-is-hard",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Because they're fictitious",
    slug: "because-they-re-fictitious",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "And it's 4:30AM",
    slug: "and-it-s-4-30am",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Black Mirror",
    slug: "black-mirror",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Superheroes Ecovillage",
    slug: "superheroes-ecovillage",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}];

ReactDOM.render(
    <App
        ecovillages={ecovillages}
    />
, document.getElementById('root'));

serviceWorker.unregister();
