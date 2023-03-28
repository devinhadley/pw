// MyComponent.js
import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import BackArrow from "../Components/BackArrow";

function Projects(props) {

    return (<div className="App">
        <BackArrow setCurrentPage={props.setCurrentPage}/>
        <header className="console-Title">
            <p className="Bracket">></p>
            <TypeWriterEffect
                textStyle={{fontWeight: 'normal'}}
                startDelay={100}
                cursorColor="orange"
                text="Projects"
                typeSpeed={100}
            /></header>
        <div className="projects-container">
            {/* Updated project-item divs */}
            {projectsData.map((project, index) => (
                <div key={index} className="project-item">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-item-title">{project.title}</a>
                    <ul>
                        {project.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                    <p className="project-item-caption">{project.caption}</p>
                </div>
            ))}
        </div>

    </div>);
}

const projectsData = [
    {
        title: 'CourseConnect',
        link: 'https://www.courseconnect.net',
        details: ['Languages: python, javascript', 'Frameworks: django, jquery'],
        caption: 'Created a social networking platform which connects high school students based on the classes they are taking.'
    },
    {
        title: 'Sequoia West Properties',
        link: '',
        details: ['Languages: python', 'Libs/Apis: imaplib, imgbb, gspread, zillow'],
        caption: 'Built real estate lead manager for Sequoia West Properties which takes leads from email, retrieves relevant data from zillow, and formats into spreadsheet. Additionally, the program updates relevant leads on a weekly basis.'
    },
    {
        title: 'SimpleWebAutomator',
        link: 'https://github.com/devinhadley/SimpleWebAutomator',
        details: ['Languages: python', 'Libs/Apis: pyqt5, selenium'],
        caption: 'Created desktop software which converts an english-like syntax into web automation code. Allows for the creation of web automation scripts with no programming knowledge.'
    },
    {
        title: 'Other Projects',
        link: 'https://github.com/devinhadley?tab=repositories',
        details: [],
        caption: 'Many other projects can be found on my GitHub.'
    }
];

export default Projects;
