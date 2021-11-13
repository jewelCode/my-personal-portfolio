import React from 'react';
import { Accordion } from 'react-bootstrap';

const Experience = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Experience</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Full Stack Web Developer</Accordion.Header>
                    <Accordion.Body>
                    <h4>2020 - Present | Pro Level Developer</h4>
                    I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Baby Web Developer</Accordion.Header>
                    <Accordion.Body>
                    <h4>2019 - 2020 | Programming Hero (Remote)</h4>
                    They didn't offer me a job. But I made myself as a remove web developer. I made their website and showed it to them. They liked it. And uploaded the content. It was fun working at Programming Hero.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Experience;