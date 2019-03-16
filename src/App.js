import React, { Component } from 'react';

//insert Sections.
import HeaderSection from './sections/HeaderSection/HeaderSection';
import NavBar from './sections/NavBar/NavBar';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
//~~~
import './App.css';
const sectionList = [
  {id:"0",name:"home"},
  {id:"1",name:"about"},
  {id:"2",name:"experience"}
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection/>
        <NavBar listOfSections={sectionList}/>  
        <HomeSection/>
        <AboutSection/>
        <ExperienceSection/>
      </div>
    );
  }
}

export default App;
