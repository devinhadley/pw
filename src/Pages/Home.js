// MyComponent.js
import React from 'react';
import Pages from "./Pages"
import TypeWriterEffect from 'react-typewriter-effect';

function Home(props) {

    const getFile = () => {
        // using Java Script method to get PDF file
        console.log(window.location.pathname)
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="App">
            <header className="console-Title">
                <p className="Bracket">></p>
                <TypeWriterEffect
                    textStyle={{fontWeight: 'normal'}}
                    startDelay={100}
                    cursorColor="orange"
                    text="Devin Hadley"
                    typeSpeed={100}
                /></header>
            <div className="Page-links">
                <p onClick={() => props.setCurrentPage(Pages.About)}>about.</p>
                <p onClick={() => props.setCurrentPage(Pages.Projects)}>projects.</p>
                <p onClick={getFile}>resume.</p>
            </div>
        </div>
    );
}

export default Home;
