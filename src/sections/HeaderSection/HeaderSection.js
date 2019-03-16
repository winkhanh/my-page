import React, {Component} from 'react';
import './HeaderSection.css';

class HeaderSection extends Component{
    constructor(props){
        super(props);
        this.state={ 
            colorCounter: 0,
            listOfColor:[
                "#000000",
                "#ffffff"
            ]
        };
    }
    toogleNavBar = () => {
        const navBar = document.querySelector(".js-nav-bar-section");
        if (navBar==null) return;
        navBar.classList.toggle("nav-bar-section--closing");
    }
    changeColor = () =>{
        const listBars = document.querySelectorAll(".js-bar");
        let num=this.state.listOfColor.length;
        this.setState(state=>({colorCounter: (state.colorCounter+1)%num}));
        if (listBars.length!==4) return;
        listBars.forEach((bar)=>{
            bar.style.background=this.state.listOfColor[this.state.colorCounter];
        });
    };
    componentDidMount(){
        this.inverval=setInterval(()=>this.changeColor(),2000);
    }
    render(){
        return(
            <div className="header-section">
                <div onClick={()=>{this.toogleNavBar()}} className="header-section__nav-toogle">
                    <div className="bar1 js-bar"></div>
                    <div className="bar2 js-bar"></div>
                    <div className="bar3 js-bar"></div>
                    <div className="bar4 js-bar"></div>
                </div>
            </div>
        )
    }
}
export default HeaderSection;