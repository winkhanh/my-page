import React, {Component} from 'react';
import './NavBar.css';
 

class NavBar extends Component{
    toogleNavBar = () => {
        const navBar = document.querySelector(".js-nav-bar-section");
        if (navBar==null) return;
        navBar.classList.toggle("nav-bar-section--closing");
    }
    handleClick = (id) =>{
        const fullID= ".js-"+id+"-section";
        const section = document.querySelector(fullID);
        console.log(fullID);
        console.log(section);
        if (section!= null)
            section.scrollIntoView();
        this.toogleNavBar();
    }
    sections=this.props.listOfSections.map(
        (section) =>{
            return(
            <nav onClick={()=>{this.handleClick(section.name)}}>
                {section.name.toUpperCase()}
  
            </nav>
            
            )
        }
    );
    
    render(){
        return (
            <div className="nav-bar-section nav-bar-section--closing js-nav-bar-section">
                <div className="nav-bar-section__navbar">
                    {this.sections}
                </div>
                <div onClick={()=>{this.toogleNavBar()}} className="nav-bar-section__non-navbar">
                </div>
            </div>
        )
    }
}
export default NavBar;