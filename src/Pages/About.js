import React from 'react';
import TypeWriterEffect from "react-typewriter-effect";
import BackArrow from "../Components/BackArrow";


function About(props) {
    return (
        <div className="App">
            <BackArrow setCurrentPage={props.setCurrentPage}/>
            <header className="console-Title">
                <p className="Bracket fade-in">></p>
                <TypeWriterEffect
                    textStyle={{fontWeight: 'normal'}}
                    startDelay={300}
                    cursorColor="orange"
                    text="About"
                    typeSpeed={100}
                />
            </header>
            <div className="About">

                <div className="About-body">
                    <p>&emsp;&emsp;My name is Devin Hadley, a Software Engineering student at Cal Poly, with a strong passion
                        for coding and extensive experience in various technologies and programming languages. I have
                        previously worked as an instructor at Code Ninjas and created CourseConnect, a social networking
                        platform for high school students to collaborate academically. I am eager to apply my technical
                        expertise to making a positive impact through creating innovative solutions to real-world
                        problems.
                    </p>
                </div>

                <div className="social-Links">
                    <a href="https://www.linkedin.com/in/devin-hadley-6666871b7/" target="_blank">linkedin.</a>
                    <a href="https://github.com/devinhadley" target="_blank">github.</a>
                </div>
            </div>
        </div>
    );
}

export default About;
