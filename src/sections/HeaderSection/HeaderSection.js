import React, {Component} from 'react';
import './HeaderSection.css';

class HeaderSection extends Component{
    toogleNavBar = () => {
        const navBar = document.querySelector(".js-nav-bar-section");
        if (navBar==null) return;
        navBar.classList.toggle("nav-bar-section--closing");
    }
    render(){
        return(
            <div className="header-section">
                <div onClick={()=>{this.toogleNavBar()}} className="header-section__nav-toogle">
                    
                </div>
            </div>
        )
    }
}
export default HeaderSection;