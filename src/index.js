import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ecovillages = [{
    name: "Somewhere Nice",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Ecovillage FTW",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "A village that is eco",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Naming ecovillages is hard",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Because they're fictitious",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "And it's 4:30AM",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Black Mirror",
    city: "Location",
    country: "Country",
    picture: "placeholders/placeholder.jpg"
}, {
    name: "Superheroes Ecovillage",
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
