import React from 'react';

import './styles.scss';

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
                            <p>
                                Website: <a href={current_ecovillage.website} target="_blank">{current_ecovillage.website}</a>
                            </p>
                            <div><pre>
                                {current_ecovillage.description}
                            </pre></div>
                        </div>
                    </section>

                    <aside>
                        <ul>
                            <li>
                                <h3>
                                    { current_ecovillage.forming ? (
                                        <span className="badge badge-secondary">forming</span>
                                    ) : (
                                        <span className="badge badge-success">established</span>
                                    )}
                                    <span>{current_ecovillage.country}</span>
                                </h3> {current_ecovillage.continent}, {current_ecovillage.founded_in}
                            </li>
                            <li>
                                <h3>Language(s)</h3>
                                <ul>
                                    <li>{current_ecovillage.languages}</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Scope</h3>
                                <ul>
                                    {current_ecovillage.education && <li>Education</li>}
                                    {current_ecovillage.research && <li>Research</li>}
                                    {current_ecovillage.art && <li>Art</li>}
                                    {current_ecovillage.spiritual && <li>Spiritual</li>}
                                    {current_ecovillage.religious && <li>Religious</li>}
                                </ul>
                            </li>
                            <li>
                                <h3>Landscape</h3>
                                <ul>
                                    {current_ecovillage.urban && <li>Urban</li>}
                                    {current_ecovillage.semi_urban && <li>Semi Urban</li>}
                                    {current_ecovillage.rural && <li>Rural</li>}
                                    {current_ecovillage.mobile && <li>Mobile</li>}
                                </ul>
                            </li>
                            <li>
                                <h3>Building</h3>
                                <ul>
                                    {current_ecovillage.cohousing && <li>Cohousing</li>}
                                    {current_ecovillage.shared_housing && <li>Shared Housing</li>}
                                    {current_ecovillage.building_lots && <li>Building Lots</li>}
                                    {current_ecovillage.camping && <li>Camping</li>}

                                    {current_ecovillage.cellphone_service && <li>Cellphone service</li>}
                                    {current_ecovillage.internet && <li>Internet</li>}
                                    {current_ecovillage.community_farm_garden && <li>Community Farm/Garden</li>}
                                    {current_ecovillage.gym_sports_facilities && <li>Gym/Sports Facilities</li>}
                                    {current_ecovillage.large_scale_kitchen && <li>Large-Scale Kitchen</li>}
                                    {current_ecovillage.library && <li>Library</li>}
                                    {current_ecovillage.play_areas && <li>Play Areas</li>}
                                    {current_ecovillage.swimming_pond_pool && <li>Swimming/Pond Pool</li>}
                                </ul>
                            </li>
                            <li>
                                <h3>Community Type</h3>
                                <ul>
                                    {current_ecovillage.income_sharing && <li>Income-Sharing</li>}
                                    {current_ecovillage.self_governance && <li>Self-governance</li>}
                                </ul>
                            </li>
                            <li>
                                <h3>Sustainability</h3>
                                <ul>
                                    {current_ecovillage.natural && <li>Natural</li>}
                                    {current_ecovillage.green && <li>Green</li>}
                                    {current_ecovillage.self_or_shared_food_production && <li>Self or Shared Food Production</li>}
                                    {current_ecovillage.renewable_energy && <li>Renewable Energy</li>}
                                </ul>
                            </li>
                            <li>
                                <h3>Inhabitants</h3>
                                <ul>
                                    {current_ecovillage.residents > 0 && <li>{current_ecovillage.residents} residents</li>}
                                    {current_ecovillage.dietary_restrictions != "None" && <li>{current_ecovillage.dietary_restrictions}</li>}
                                    {current_ecovillage.visitors && <li>Accept visitors</li>}
                                    {current_ecovillage.new_members && <li>Accept new members</li>}
                                    {current_ecovillage.volunteers && <li>Accept volunteers</li>}
                                </ul>
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
