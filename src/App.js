import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Index from './pages/Index/Index';
import Page from './pages/Page/Page';
import PageEcovillage from './pages/PageEcovillage/PageEcovillage';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ecovillages: this.props.ecovillages
        };
    }

    componentDidMount(){
        // let show = function (elem) {
        //     elem.classList.add('is-visible');
        // };
        // let hide = function (elem) {
        //     elem.classList.remove('is-visible');
        // };
        let toggle = function (elem) {
            elem.classList.toggle('is-visible');
        };
        document.addEventListener('click', function (event) {
            if (!event.target.classList.contains('toggle')) return;
            event.preventDefault();
            let content = document.querySelector(event.target.hash);
            if (!content) return;
            toggle(content);
        }, false);
    }

    render(){
        return (
            <div id="App" className="flex columns">
                <Router>
                <header>
                    <Link to="/">
                        <svg id="a6c7b727-206f-4262-a658-7cf8f23177ef" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 51.44 51.44">
                            <path className="f2eb4545-4c81-4e7e-9a37-b0b3408b6e80"
                                d="M26.36,1.06A25.72,25.72,0,1,0,52.08,26.78,25.75,25.75,0,0,0,26.36,1.06Zm0,3.05a22.65,22.65,0,0,1,18.9,35.16H42A13.43,13.43,0,0,0,45.31,30c0-6.41-3.81-11.63-8.49-11.63-2.6,0-4.93,1.62-6.49,4.15l-4.15-2.92-15.95,8,0,11.7H7.46A22.66,22.66,0,0,1,26.36,4.11ZM38.3,32.3V29.43l3.86-2.72a12.53,12.53,0,0,1,.41,2.58Zm-2.72,3.47v2.94c-2-.69-3.58-3-4.23-5.91Zm2.72,2.85v-3l4-2.81C41.67,35.61,40.15,37.83,38.3,38.62Zm0-12.51V21.42a6.27,6.27,0,0,1,2.8,2.71Zm-2.72.12-3-2.13a6,6,0,0,1,3-2.77Zm0,3.33v2.89l-4.5-3.17a12.72,12.72,0,0,1,.41-2.6ZM28.33,30a13.5,13.5,0,0,0,3.34,9.23l-4,0V33.84H18.84V39.2l-5.86,0,0-9.92,13-6.48L29.16,25A15.34,15.34,0,0,0,28.33,30Zm-6.77,9.12V36.55H25v2.59Zm4.8,10.3A22.63,22.63,0,0,1,9.57,42H43.15A22.63,22.63,0,0,1,26.36,49.44ZM15.54,19.19a4.54,4.54,0,0,0,6-2.2,4.55,4.55,0,1,0-6,2.2Zm.26-4.9a1.82,1.82,0,0,1,1.66-1.06,1.91,1.91,0,0,1,.77.17,1.83,1.83,0,0,1,.89,2.44h0a1.78,1.78,0,0,1-1,.95,1.82,1.82,0,0,1-2.35-1.1A1.79,1.79,0,0,1,15.8,14.29Z"
                                transform="translate(-0.64 -1.06)"/>
                        </svg>
                        <h1>Ecovillage List</h1>
                    </Link>

                    <form role="search" method="get" id="searchform" action="">
                        <input type="search"/>
                        <input type="submit" value=""/>
                    </form>

                    <nav>
                        <Link to="/page">Page</Link>
                    </nav>

                </header>

                <Switch>
                    <Route path="/" exact component={() => <Index ecovillages={this.state.ecovillages} />} />
                    <Route path="/page" component={Page} />
                    <Route path="/:slug" component={(match) => <PageEcovillage ecovillages={this.state.ecovillages} match={match.match}/>} />
                </Switch>

                <footer className="grid">
                    <div className="flex-grow">
                        Created with <span role="img" aria-label="heart">💚️</span> by <a href="https://basilesamel.com/">Basile</a>
                        <span>&middot;</span><a href="https://patriciapires.github.io/">Patricia</a>
                        <span>&middot;</span><a href="https://miguelpiedrafita.com/">Miguel</a>
                        <span>&middot;</span><a href="https://sava.io/">Alina</a>
                    </div>
                    <div><a href="https://twitter.com/EcovillageList">Twitter</a> &mdash; <Link to="/privacy">Privacy</Link></div>
                </footer>

                </Router>
            </div>
        );
    }
}

export default App;
