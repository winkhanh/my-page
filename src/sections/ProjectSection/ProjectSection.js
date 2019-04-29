import React, {Component} from 'react';
import './ProjectSection.css';

import MenuBar from '../../components/MenuBar/MenuBar';
class ProjectSection extends Component{
    constructor(props){
        super(props);
        this.state={
            currentProject:"0"
        };
    }
    projectMenu=this.props.listOfProjects.map(project =>{
        return {id: project.id,name:project.name,image:project.image};
    });
    changeProject = (id) =>{
        this.setState(prevstate=>{
            return {currentProject : id}
        });
    }
    
    render(){
        const imageOfProject = this.props.listOfProjects.filter(project=>{
            return (project.id===this.state.currentProject);
        }).map(project=>{
            return(
                    <img src={require("../../assets/projects/"+this.state.currentProject+".jpg")} alt="projects"></img>
            )
        })
        const descriptionOfProject = this.props.listOfProjects.filter(project=>{
            return (project.id===this.state.currentProject);
        }).map(project=>{
            return(
                <div>
                    <center><h1>{project.name}<br></br></h1></center>
                    <p>
                        {project.description}
                    </p>
                </div>                
            )
        })
        return(
        <div className="project-section js-project-section">
            <div className="project-section__container">
                {imageOfProject}
                <div className="project-section__description">
                    {descriptionOfProject}
                </div>
            </div>
            <MenuBar listOfProjects={this.projectMenu} handleClick={this.changeProject  } />
        </div>
        )
    }
}

export default ProjectSection;