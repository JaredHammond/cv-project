import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import React from 'react';
import './style/app.css'
import {experienceListing, educationListing, handleEduInputChange, handleExpInputChange} from './utils/main'

class App extends React.Component {
  constructor() {
    super();

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleExpInputChange = handleExpInputChange.bind(this);
    this.handleEduInputChange = handleEduInputChange.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.addExperienceItem = this.addExperienceItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);
    this.removeExperienceItem = this.removeExperienceItem.bind(this);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: ''
      },
      experienceList: [experienceListing()],
      educationList: [educationListing()]
    }
  }

  handleGeneralChange(e) {
    const {name, value} = e.target;

    this.setState(prevState => {
      const updatedGen = {...prevState.general, [name]:value};
      return {...prevState, general: updatedGen}
    })
  }

  addEducationItem() {
    this.setState(prevState => {
      const updatedEduList = [...prevState.educationList, educationListing()]
      return {...prevState, educationList: updatedEduList}
    })
  }

  removeEducationItem() {
    this.setState(prevState => {
      const prevLength = prevState.educationList.length;
      const updatedEdulist = prevState.educationList.slice(0, prevLength - 1)
      return {...prevState, educationList: updatedEdulist}
    })
  }

  addExperienceItem() {
    this.setState(prevState => {
      const updatedExpList = [...prevState.experienceList, experienceListing()]
      return {...prevState, experienceList: updatedExpList}
    })
  }

  removeExperienceItem() {
    this.setState(prevState => {
      const prevLength = prevState.experienceList.length;
      const updatedExplist = prevState.experienceList.slice(0, prevLength - 1)
      return {...prevState, experienceList: updatedExplist}
    })
  }

  render() {
    return(
      <div className='app'>
        <General change={this.handleGeneralChange} info={this.state.general} />
        <Experience list={this.state.experienceList} change={this.handleExpInputChange} removeItem={this.removeExperienceItem} addItem={this.addExperienceItem} />
        <Education list={this.state.educationList} change={this.handleEduInputChange} removeItem={this.removeEducationItem} addItem={this.addEducationItem} />
      </div>
    )
  }
}

export default App;
