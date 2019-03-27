import React from "react"
import './global.css';


const Card = (props) => {
    const {title, description, OnclickItem, name} = props;
    
    return (
        <div className="project-item-container">
        <div className="project-text-container">
            <button className="project-item-link" onClick={() => OnclickItem(name)}>
                <h2 className="project-text h2-main-style">{title}</h2>
            </button>
        </div>
            <p className="project-paragraph">{description}</p>
    </div>
)};

export default Card
