// MyComponent.js
import React from 'react';
import pages from "../Pages/Pages";


function BackArrow(props) {
    return (
        <p onClick={() => props.setCurrentPage(pages.Home)} className="back-Arrow">&lt;-</p>
    );
}

export default BackArrow;


