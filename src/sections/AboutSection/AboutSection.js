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
            <div  className="about-section__about">
                <center><span className="about-section__about__title">Facts about me:</span></center><br></br>
                <p>
                    I am from <span className="vn">Vietnam</span><br></br>
                    I came to SUNY Plattsburgh, US for college. <br></br>
                    I am a freshman currently.<br></br>
                    I will graduate in <span className="year">2020</span>. <br></br>
                    I am a Software Developer.<br></br>
                    I am interested in algorithms and solving problems.<br></br>
                    I am the <span className="position">secretary</span> of <span className="organization">Software Engineer Club</span> since <span className="year">2018</span>. <br></br>
                    I am also a <span className="position">full stack developer</span> and the <span className="position">Co-Founder</span> of <span className="organization">Coding Hub</span> since <span className="year">2018</span>. <br></br>
                    I am experienced with: <br></br>
                </p>
            </div>
            <div className="about-section__about__list about-section__about">
                {listOfLanguages}
                {listOfTechs}
            </div>
        </div>)
    }
}

export default AboutSection;