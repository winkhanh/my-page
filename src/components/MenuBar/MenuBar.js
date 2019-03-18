import React from 'react';
import './MenuBar.css';

const MenuBar = (props) =>{
    const theMenu = props.listOfProjects.map(project =>{    
    
    const imageAlt="this is image of "+project.name;
    return(
        <img onClick={(e)=>{props.handleClick(project.id);}} src={require("../../assets/projects/p"+project.image)} alt={imageAlt}></img>
        );
    });
    return(
        <div className="menu-bar-component__bar">
            {theMenu}
        </div>
    )
};

export default MenuBar;