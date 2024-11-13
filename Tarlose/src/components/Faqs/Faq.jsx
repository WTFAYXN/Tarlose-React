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
                                What is Tarlose?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               Tarlose is a technology company founded by Ayan Sayad, Huzaifa Ansari, and Hamdan Shaikh. 
                              The company offers a range of tech-based services, including website development, app development, tech consultation, graphic design, and digital marketing. 
                              Tarlose has collaborated with clients globally, delivering tailored solutions to meet diverse technological needs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can Tarlose help my business?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Tarlose offers a wide range of tech-based services that can help your business grow and thrive in the digital age.
                              By partnering with Tarlose, you can leverage cutting-edge technology to enhance your business operations, 
                              improve customer engagement, and stay competitive in your industry.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What industries does Tarlose work with?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
Tarlose works with a diverse range of industries, including real estate, food packaging, pharmaceuticals, franchising, e-commerce, 
                              tech startups, and marketing. They provide customized solutions such as websites and apps for property management, tech tools for supply chain management, inventory tracking for pharma, and digital platforms for franchise businesses. Additionally, they offer tailored e-commerce solutions, tech consultation for startups, and creative services like branding and digital marketing. Tarlose adapts its services to meet the unique needs of each industry, helping businesses grow and optimize their operations.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How long does it take to complete a project with Tarlose?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              
The timeline for completing a project with Tarlose depends on the scope and complexity of the work. 
                              Smaller projects like basic website development or graphic design might take a few weeks, while larger projects such as custom app development or comprehensive digital marketing campaigns could take several months. Tarlose works closely with clients to establish clear timelines and ensure that each phase of the project is delivered on schedule, with regular updates to keep you informed throughout the process.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Do you offer ongoing support and maintenance after the project is completed?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                        

Yes, Tarlose offers ongoing support and maintenance services after the project is completed. We provide assistance with updates, troubleshooting, and any necessary improvements to ensure your website, app, or other digital solutions continue to function smoothly. This helps keep your business running efficiently and ensures your tech solutions remain up-to-date and secure. Tarlose tailors its support plans to meet the specific needs of each client, offering flexibility in maintaining long-term partnerships.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Can you work with existing design or development frameworks?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                       

Yes, Tarlose can work with existing design or development frameworks. Whether you already have a design system in place or are using a particular development framework, Tarlose can seamlessly integrate with your existing setup. We have experience with a wide range of tools and technologies, ensuring that they can build upon or optimize your current frameworks to meet your project needs without starting from scratch.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                How involved will I be in the project development process?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                       

With Tarlose, your involvement in the project development process is a key priority. We encourage regular communication and collaboration throughout the project. From the initial planning and design phases to development and final delivery, you’ll have the opportunity to provide input, give feedback, and make decisions. Tarlose keeps you updated on progress through meetings, reports, or demos, ensuring that the project aligns with your vision and goals at every stage. Your level of involvement can also be adjusted to match your preferences.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Can you help with website or app maintenance and updates?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
Yes, Tarlose provides ongoing maintenance and update services for websites and apps. They ensure your digital solutions remain functional, secure, and up-to-date through regular updates, troubleshooting, and performance optimization, allowing you to focus on your business while they manage the technical details.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;