import React from 'react';
import './Community.css';

const Community = () => {
    return (
        <>
            <div className="community-section">
                <div className="container py-5">
                    <h2 className="text-center mb-5">Join Our Thriving Communities</h2>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="community-card freelancer-card">
                                <div className="card-body text-center">
                                    <div className="icon-wrapper mb-4">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 4C12.268 4 6 10.268 6 18C6 25.732 12.268 32 20 32C27.732 32 34 25.732 34 18C34 10.268 27.732 4 20 4ZM20 8C22.206 8 24 9.794 24 12C24 14.206 22.206 16 20 16C17.794 16 16 14.206 16 12C16 9.794 17.794 8 20 8ZM20 28.4C16.5 28.4 13.36 26.72 11.6 24.1C11.64 21.05 17.6 19.4 20 19.4C22.38 19.4 28.36 21.05 28.4 24.1C26.64 26.72 23.5 28.4 20 28.4Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <h3 className="card-title mb-4">Freelancers Community</h3>
                                    <p className="card-text-community mb-4">
                                        Connect with fellow freelancers, share opportunities, and grow your network in our vibrant community.
                                    </p>
                                    <a href="https://chat.whatsapp.com/IJrPAD6r5fcDJn9y9Prm8S" className="join-btn">
                                        Join Now 
                                        <svg className="ms-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="community-card entrepreneur-card">
                                <div className="card-body text-center">
                                    <div className="icon-wrapper mb-4">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32 12H28V8C28 5.8 26.2 4 24 4H16C13.8 4 12 5.8 12 8V12H8C5.8 12 4 13.8 4 16V32C4 34.2 5.8 36 8 36H32C34.2 36 36 34.2 36 32V16C36 13.8 34.2 12 32 12ZM16 8H24V12H16V8Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <h3 className="card-title mb-4">Developers Hub</h3>
                                    <p className="card-text-community mb-4">
                                        Join a community of innovative entrepreneurs, share insights, and collaborate on exciting ventures.
                                    </p>
                                    <a href="https://chat.whatsapp.com/KKqS1T1n9lb1TGTgFJyIZE" className="join-btn">
                                        Join Now 
                                        <svg className="ms-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Community;