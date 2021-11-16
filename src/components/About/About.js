import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import about from '../resources/about.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={about} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h1>BIG DREAM</h1>
                        <h3>Become a Web Developer</h3>
                        <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                        <button type="button" class="btn btn-warning"> <FontAwesomeIcon icon={faDownload} /> Download My CV</button>
                    </div>
            </div>
        </div>
    );
};

export default About;