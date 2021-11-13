import React from 'react';
import profile from '../resources/profile.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                    <div className="col-md-6 mt-5">
                        <h1>Welcome to Jewel's</h1>
                        <h1>Portfolio</h1>
                        <h4>Front End Developer</h4>
                        <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                        <button type="button" class="btn btn-warning">Hire Me</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="img-fluid" src={profile} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Header;