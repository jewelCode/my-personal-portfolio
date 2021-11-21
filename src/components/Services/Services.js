import React from 'react';

const Services = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">My Services</h2>
            <div className="row mt-5 justify-content-center">
                    <div className="col-md-3 border p-5 me-5 bg-dark text-light">
                        <h5 className="card-title">PSD to HTML Conversion</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    <div className="col-md-3 border p-5 me-5 bg-primary text-light">
                        <h5 className="card-title">Figma to HTML conversion</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    <div className="col-md-3 border p-5 me-5 bg-dark text-light">
                        <h5 className="card-title">React Web App Creation</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
            </div>
            
        </div>
    );
};

export default Services;