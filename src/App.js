import React, { Component } from 'react';

//insert Sections.
import HeaderSection from './sections/HeaderSection/HeaderSection';
import NavBar from './sections/NavBar/NavBar';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectSection from './sections/ProjectSection/ProjectSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
import FooterSection from './sections/FooterSection/FooterSection';

//~~~
import './App.css';
const sectionList = [
  {id:"0",name:"home"},
  {id:"1",name:"about"},
  {id:"2",name:"project"},
  {id:"3",name:"experience"}
];
const projectList = [
  {id:"0",name:"Personal Website",image:"0.jpg",
  description:"ABCASDSADA"
  },
  {id:"1",name:"Shuttler",image:"1.jpg",
  description:"this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app this is shuttle tracking app "
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection/>
        <NavBar listOfSections={sectionList}/>  
        <HomeSection/>
        <AboutSection/>
        <ProjectSection listOfProjects={projectList}/>
        <ExperienceSection/>
        <FooterSection/>
      </div>
    );
  }
}

export default App;
