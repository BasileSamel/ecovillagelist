import React from 'react';

class PageEcovillage extends React.Component {
    render(){
        const slug = this.props.match.params.slug;
        const current_ecovillage = this.props.ecovillages.filter((ecovillage) => {
            return ecovillage.slug === slug;
        })[0];

        return (
            <>
            <section className="hero-page">
                <div className="container">
                    <h2>{current_ecovillage.name}</h2>
                </div>
            </section>

            <main className="flex-grow">
                <div className="container grid-cs">
                    <section>
                        <div className="container page">
                            <img src={current_ecovillage.picture} alt=""/>
                            <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                            <blockquote>
                                Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.
                                <cite>Someone</cite>
                            </blockquote>
                            <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                            <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                            <p>Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical. Hipster ipsum pug adaptogen semiotics, lomo viral umami asymmetrical.</p>
                        </div>
                    </section>

                    <aside>
                        <ul>
                            <li>
                                <h3>{current_ecovillage.city}</h3>
                                {current_ecovillage.city}, {current_ecovillage.country}
                            </li>
                            <li>
                                <h3>Language(s)</h3>
                                <ul>
                                    <li>English</li>
                                    <li>French</li>
                                    <li>Portuguese</li>
                                    <li>Spanish</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Scope</h3>
                                Education
                            </li>
                            <li>
                                <h3>Landscape</h3>
                                Semi-urban
                            </li>
                            <li>
                                <h3>Building</h3>
                                Green
                            </li>
                            <li>
                                <h3>Community Type</h3>
                                Cohousing
                            </li>
                            <li>
                                <h3>Sustainability</h3>
                                Alternative Energy
                            </li>
                            <li>
                                <h3>Inhabitants</h3>
                                300
                            </li>
                        </ul>
                    </aside>
                </div>
            </main>
            </>
        );
    }
}

export default PageEcovillage;
