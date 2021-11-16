import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import skills from '../resources/skills.jpg'
const Skills = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                        <h2 className="text-center">SKILLS</h2>    
                    <h5>HTML</h5>
                    <ProgressBar animated variant="success" now={80} />
                    <br />
                    <h5>CSS</h5>
                    <ProgressBar animated variant="warning" now={70} />
                    <br />
                    <h5>Javascript</h5>
                    <ProgressBar animated variant="danger" now={75} />
                    <br />
                    <h5>React</h5>
                    <ProgressBar animated now={90} />
                    <br />
                    <h5>Vue</h5>
                    <ProgressBar animated variant="info" now={80} />
                    </div>
                <div className="col-md-5">
                    <img className="img-fluid" src={skills} alt=""/>
                </div>
                </div>
        </div>
    );
};

export default Skills;