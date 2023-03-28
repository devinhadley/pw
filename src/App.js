import './App.css';
import React, {useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pages from "./Pages/Pages"
import Projects from "./Pages/Projects";



function App() {

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div>
            {currentPage === Pages.Home && <Home setCurrentPage={setCurrentPage}/>}
            {currentPage === Pages.About && <About setCurrentPage={setCurrentPage}/>}
            {currentPage === Pages.Projects && <Projects setCurrentPage={setCurrentPage}/>}
        </div>
    );
}

export default App;
