import React, {Component} from 'react';
import './HomeSection.css';

class HomeSection extends Component{
    render(){
        return(
            <div className="home-section">
                <div className="home-section__left">
                </div>
                <div className="home-section__right">
                    <img src={require('../../assets/HomeBackGround.png')} alt='not'></img>
                </div>
            </div>
        )
    }
}
export default HomeSection;