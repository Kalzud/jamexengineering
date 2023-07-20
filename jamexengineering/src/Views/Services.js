import React from "react";

// ===========================Image imports=========================================================
import design from'../img/services/design.jpg';
import civil from'../img/services/civil.jpg';
import distribution from'../img/services/distribution.jpg';
import electrical from'../img/services/electrical.jpg';
import estate from'../img/services/estate.jpg';
import maintenance from'../img/services/maintenance.jpg';
import petroleum from'../img/services/petroleum.jpg';
import powerline from'../img/services/powerline.jpg';
import road from'../img/services/road.jpg';
import rural from'../img/services/rural.jpg';
import solar from'../img/services/solar.jpg';
import structure from'../img/services/structure.jpg';
import transformer from'../img/services/transformer.jpg';
import {NavLink, Link} from "react-router-dom";
// import {Link} from "@mui/icons-material";

const Services = () =>{
        return(
            <>
                <div className='row serviceTop'>
                    <div className='col-sm-12'>
                        <div className='card' style={{border:"none"}}>
                            <div className='card-body'>
                                <h1>
                                    Our Services
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row serviceSub'>
                    <div className='card' style={{border:"none"}}>
                        <div className='card-body'>
                            <div className='card-text'>
                                Feel free to contact us about any of the services listed here.
                                It is important to note this does not contain the entirety of
                                our services so you can still contact us concerning a project
                                you have not spotted in the list or a mixture of
                                projects be it small or big. Thank you.
                            </div>
                            <div className='row serviceContactBtn'>
                                <Link className=" " to="/contact">
                                    <button className="btn">Contact us <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*======================================================================================Services section==============================================================================================================================*/}
                {/*===================================================================================================================*/}
                <div className='row serviceListing'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={rural} alt='rural'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Rural Electrification</h2>
                                </div>
                                <div className='card-text'>
                                    Jamex aids rural areas and towns, particularly those where
                                    the national grid is unable to provide all the necessary electricity.
                                    We provide this assistance in the form of electricity delivered to
                                    rural communities to meet their electrical needs. At Jamex, we are
                                    conscious of the high cost of electrification in sparsely inhabited
                                    areas, so we offer services that utilise a hybrid system that makes
                                    the most of the national grid, solar energy, bioenergy, wind, etc.
                                    At Jamex, we take care to customise services to the needs and areas
                                    of deficiency of the community being electrified (whether it be healthcare,
                                    education, productivity, etc.). In addition to putting safety first when
                                    providing our services, we also follow industry rules to safeguard the
                                    community's and employees' safety. Another reason we ensure the use of
                                    cutting-edge technologies and creative approaches in our rural electrification
                                    is that we take great delight in creating with the possibility of future growth,
                                    development, and expansion in the community to lower the cost of upgrades along the road.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={powerline} alt='powerline'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Powerline Construction</h2>
                                </div>
                                <div className='card-text'>
                                    Here at Jamex, we construct and erect the poles or tower
                                    structures utilised in the long-distance transmission and
                                    distribution of electrical energy. Our engineers and workers'
                                    knowledge ensures that we use less expensive technologies to
                                    construct structures with the same quality and longevity as more
                                    expensive ones. We make sure to construct with an awareness of the
                                    structures' ease of maintenance and safety. Additionally, we guarantee
                                    eco-friendly building practises and materials. We accept projects of
                                    all sizes, whether they involve the construction of towers for carrying
                                    extremely high voltages or poles for carrying low voltages.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={design} alt='design'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Housing Electrical Design</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we provide technical support and help for housing
                                    construction projects in accordance with our electrical experience.
                                    We show the client a graphic representation of how electrical wires
                                    and other system components are connected, as well as the various
                                    electrical system components that will be utilised in the home.
                                    We also divulge information on the powerline, the main switch,
                                    the tiebreaker, and fuse switches, among other things. In doing so,
                                    we assist the customer in identifying potential hazards in the construction
                                    project and enable revisions averting serious harm. To do this,
                                    we ensure that our services are of the highest calibre, saving our
                                    clients’ money, time, and resulting in a maintainable structure.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={electrical} alt='electrical'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Electrical Construction</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we provide electrical solutions for a range of projects,
                                    including those involving the development of housing terminals,
                                    railroads, and roads. These remedies could include working together
                                    on a project or finishing it entirely. We assist our clients by managing
                                    the electrical components of their projects in a way that is affordable,
                                    permits simple maintenance, and also takes into account the potential for
                                    expansion on the project over time. We also guarantee effective and efficient
                                    communication and connectivity with other teams working on different project components.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={civil} alt='civil'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Civil Construction</h2>
                                </div>
                                <div className='card-text'>
                                    Jamex wants to influence its surroundings through cutting-edge
                                    infrastructure and new technology. As a result, we work on projects
                                    that involve the development of water, earth, and transportation initiatives.
                                    This may include things like wastewater treatment facilities, airports,
                                    railroads, and bridges. We complete these projects more quickly and use fresh,
                                    creative, and economical techniques. Here at Jamex, we assist clients with
                                    planning, designing, and testing structures prior to their public use.
                                    When we build, we consider the environment and employ high-quality, long-lasting materials.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={structure} alt='structure'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Structural Engineering</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we provide physics-based services that can be compared
                                    to the skeleton and muscles of artificially constructed things.
                                    Which services are they? We comprehend and compute the project's stability,
                                    strength, stiffness, and earthquake susceptibility. With our expertise
                                    in structural analysis, design codes, and corrosion resistance in
                                    materials, we assist and ensure that the client project is durable,
                                    qualified, and maintainable. We also help manage and support the client
                                    project, making effective and creative use of building materials,
                                    funds, and structural elements to achieve building goals.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={transformer} alt='transformer'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Transformer Installation</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we provide transformer installation services that cover
                                    things like considering the transformer's area, mounting it,
                                    calibrating the tap setting, guiding the routing of the holes,
                                    energising the transformer, connecting it to the terminals, etc.
                                    We do this while taking best practises into account. To put it another
                                    way, we construct cost-effectively with maintainability and safety as
                                    our top priorities. We also ensure easy installation by employing
                                    removable coverings. We also make sure that our construction has
                                    only beneficial impacts on the environment.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={maintenance} alt='maintenance'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Maintenance</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we offer upkeep services for both new and ongoing projects.
                                    We support projects in their repair, restoration, and establishment to
                                    acceptable conditions. We also make sure that precautions are taken to
                                    stop future deterioration of the project.
                                    These services can be used for a variety of jobs, big or small.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={distribution} alt='distribution'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Power Distribution</h2>
                                </div>
                                <div className='card-text'>
                                    A dependable, efficient power distribution system is crucial
                                    given the constantly rising demand for energy.
                                    At Jamex, we provide state-of-the-art services aimed at empowering your
                                    community with an uninterrupted supply of electricity. We guarantee a
                                    dependable and stable power supply with the help of our team of trained
                                    and experienced engineers. Additionally, we apply contemporary solutions
                                    and customise them to the distinctiveness of the region, city, or community.
                                    At Jamex, we also consider prospective growth and plan for growth, development,
                                    and expansion; as a result, we construct with this in mind to prevent expensive
                                    upgradations. We also make sure that safety rules are rigorously followed and
                                    that the process is efficient while additionally providing maintenance for these services.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={road} alt='road'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Road Construction</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we strive to stand out by providing top-notch road
                                    construction services that are devoted to quality, innovation,
                                    and efficiency. With unrivalled experience, our team of engineers
                                    aims to build dependable, high-quality roadways. At Jamex, we place
                                    a high priority on safety and make sure to follow accepted norms and
                                    procedures to keep all road users safe. We also make sure to provide
                                    customers with solutions depending on the particulars of their projects,
                                    and we guarantee timely project execution because we recognise the value
                                    of completing projects on time. We constantly guarantee customer pleasure
                                    when building roads while considering the impact on the environment.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={estate} alt='estate'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Real Estate</h2>
                                </div>
                                <div className='card-text'>
                                    With Jamex engineering and construction,
                                    you are entering a world of real estate innovation and creativity.
                                    Real estate, in our opinion, is about creating locations where memories
                                    may be built rather than just being about buildings and mortar.
                                    Considering this, we are dedicated to quality, effectiveness, and client
                                    happiness. For a variety of projects, we provide our knowledge in building
                                    and provide real estate solutions that are specific to the demands of the clients.
                                    We provide complete maintenance solutions that are eco-friendly in our production.
                                    We also take great pride in being open and communicative.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={petroleum} alt='petroleum'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Marketing and Production of Petroleum products</h2>
                                </div>
                                <div className='card-text'>
                                    At Jamex, we recognise the value of the petroleum industry
                                    to society and work hard to provide services that will advance that sector.
                                    We provide petroleum products that come from credible and trustworthy suppliers.
                                    Additionally, we have a solid supply network, so you can rely on on-time deliveries.
                                    Additionally, Jamex provides complete equipment solutions for the sector, including
                                    pipes, valves, fittings for storage tanks, dispenser systems, etc.
                                    We make sure that the services are customised for each individual client,
                                    customer, or project. We prioritise safety while ensuring a customer-centred,
                                    creative, and economical strategy. At Jamex, we also make sure that our client is
                                    collaborating with a network of business experts.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===================================================================================================================*/}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-img-top'>
                                    <img src={solar} alt='solar'/>
                                </div>
                                <div className='card-title'>
                                    <h2>Solar Panel Installation</h2>
                                </div>
                                <div className='card-text'>
                                    There has never been a better time to embrace solar energy.
                                    At Jamex, we think making eco-friendly decisions should not only
                                    be good for the environment but also result in long-term financial savings.
                                    As a result, we provide dependable and effective solar solutions that are
                                    tailored to the specifics of the site. Along with this, we make sure the
                                    installation is long-term economical and environmentally friendly.
                                    Additionally, we guarantee the viability and longevity of our solar products.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

}
export default Services;