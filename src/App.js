import React, { Component } from 'react';

//insert Sections.
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
//~~~
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomeSection/>
          <AboutSection/>
          <ExperienceSection/>
      </div>
    );
  }
}

export default App;
