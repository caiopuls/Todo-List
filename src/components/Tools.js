
import React from 'react'
import { FiShare } from 'react-icons/fi';

function Tools() {

    

    return (
        <div className="tools-menu">

            <div className="icons-menu">

                <button id="clear-btn" 
                className="clear-btn"
                // Insert here a onClick to share your ToDo
                >

                <FiShare
                /> <span>Compartilhar</span>
                </button>
            </div>

        </div>
    )
    
}

export default Tools
