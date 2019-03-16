import React, {Component} from 'react';
import './AboutSection.css';
class AboutSection extends Component{
    constructor(props){
        super(props);
        this.state={
            experiencedList:[
                {title:'C/C++',category:"language"},
                {title:'Python',category:"language"},
                {title:'C#',category:"language"},
                {title:'Kotlin',category:"language"},
                {title:'Javascript',category:"language"},
                {title:'HTML/CSS',category:"language"},
                {title:'React.js',category:"tech"},
                {title:'Node.js',category:"tech"},
                {title:'MySQL',category:"tech"},
                {title:'Arduino',category:"tech"},
                {title:'Unity',category:"tech"}
            ]
        }
    }
    
    render(){
        const listOfLanguages = this.state.experiencedList.filter(
            item =>{
                return (item.category==="language");
            }
        ).map( item =>{
            return(
                <div className="about-section__about__item--language">
                    {item.title}
                </div>
            )
        });
        const listOfTechs = this.state.experiencedList.filter(
            item =>{
                return (item.category==="tech");
            }
        ).map( item =>{
            return(
                <div className="about-section__about__item--tech">
                    {item.title}
                </div>
            )
        });
        return(<div className="about-section js-about-section">
            <div className="about-section__photo">
                <div className="about-section__photo__photo">
                </div>
            </div>
            <div className="about-section__about">
                <p>
                    <span className="about-section__about__title">Some facts about me:</span><br></br>
                    I am from <span>Vietnam</span><br></br>
                    I came to SUNY Plattsburgh, US for college. <br></br>
                    I am <span>a freshman</span> currently.<br></br>
                    I will graduate in 2020. <br></br>
                    I am a Software Developer.<br></br>
                    I am interested in algorithms and solving problems.<br></br>
                    I am experienced with: <br></br>
                </p>
                <div className="about-section__about__list">
                    {listOfLanguages}
                    {listOfTechs}
                </div>
            </div>
        </div>)
    }
}

export default AboutSection;