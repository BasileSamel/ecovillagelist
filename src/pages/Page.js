import React from 'react';

class Page extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <>
            <section className="hero-page">
                <div className="container page">
                    <h1>This is the page title</h1>
                </div>
            </section>

            <main className="flex-grow">
                <div className="container page">
                    <img src="placeholders/placeholder.jpg" alt=""/>
                    <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                    <blockquote>
                        Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.
                        <cite>Someone</cite>
                    </blockquote>
                    <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                </div>
            </main>

            <footer className="grid">
                <div className="flex-grow">Created with <span>💚️</span> by <a href="https://basilesamel.com/">Basile</a> &middot; <a href="https://patriciapires.github.io/">Patricia</a> &middot; <a href="https://miguelpiedrafita.com/">Miguel</a> &middot; <a href="https://sava.io/">Alina</a></div>
                <div><a href="https://twitter.com/EcovillageList">Twitter</a> &mdash; <a href="#">Privacy</a></div>
            </footer>
            </>
        );
    }
}

export default Page;
