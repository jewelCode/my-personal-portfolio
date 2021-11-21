import React from 'react';
import profile from '../resources/profile.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                    <div style={{marginTop: '100px'}} className="col-md-6">
                        <h1 className="text-uppercase text-primary">Welcome to Jewel's</h1>
                        <h1 className="text-uppercase text-warning">Portfolio</h1>
                        <h4 className="text-success">Front End Developer</h4>
                        <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                        <button type="button" className="btn btn-success">Hire Me</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="img-fluid w-75" src={profile} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Header;