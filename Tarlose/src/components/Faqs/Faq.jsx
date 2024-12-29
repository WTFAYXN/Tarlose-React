import React from 'react'
import './Faq.css'

const FAQ = () => {
    return (
        <>
            <div className="card text-bg-dark">
                <img src="./assets/images/image-2.png" className="card-img" alt="..."/>
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">Frequently Asked Questions</h5>
                    <p className="card-text">Still you have any questions? Contact our Team via hello@Tarlose.com</p>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                What services does Tarlose offer?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Tarlose offers comprehensive digital solutions including:
                                <ul>
                                    <li>Custom Website Development</li>
                                    <li>Mobile App Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Digital Marketing</li>
                                    <li>Tech Consultation</li>
                                    <li>Graphic Design</li>
                                </ul>
                                Our team of experts delivers tailored solutions to help businesses thrive in the digital landscape.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What makes Tarlose different from other tech companies?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Tarlose stands out through:
                                <ul>
                                    <li>Personalized approach to each project</li>
                                    <li>Cutting-edge technology implementation</li>
                                    <li>Dedicated project managers</li>
                                    <li>Transparent communication</li>
                                    <li>Post-project support and maintenance</li>
                                </ul>
                                We focus on delivering value-driven solutions that help our clients achieve their business objectives.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What industries does Tarlose specialize in?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We serve diverse industries including:
                                <ul>
                                    <li>Real Estate - Property management platforms</li>
                                    <li>E-commerce - Custom shopping solutions</li>
                                    <li>Healthcare - Patient management systems</li>
                                    <li>Education - Learning management systems</li>
                                    <li>Finance - Secure payment integrations</li>
                                    <li>Startups - MVP development</li>
                                </ul>
                                Each solution is customized to meet industry-specific requirements and challenges.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is your project development process?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our development process follows these key stages:
                                <ol>
                                    <li>Discovery & Planning - Understanding requirements</li>
                                    <li>Design & Prototyping - Creating visual solutions</li>
                                    <li>Development - Building the solution</li>
                                    <li>Testing & QA - Ensuring quality</li>
                                    <li>Deployment - Going live</li>
                                    <li>Maintenance - Ongoing support</li>
                                </ol>
                                Each stage includes client collaboration and feedback integration.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What support services do you offer after project completion?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our post-project support includes:
                                <ul>
                                    <li>24/7 technical support</li>
                                    <li>Regular maintenance and updates</li>
                                    <li>Performance monitoring</li>
                                    <li>Security patches</li>
                                    <li>Feature enhancements</li>
                                    <li>Training and documentation</li>
                                </ul>
                                We offer flexible support packages tailored to your needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;