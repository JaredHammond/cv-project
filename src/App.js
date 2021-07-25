import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import React from 'react';
import './style/app.css'
import {experienceListing} from './utils/main'

class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.firstExperienceItem = experienceListing();
    this.state = {
      experienceList: [
        this.firstExperienceItem,
      ]
    }
  }

  addExperienceItem(e) {

  }

  handleInputChange(e) {
    const {name, value} = e.target;

    this.setState({
        [name]: value
    });
}

  render() {
    return(
      <div className='app'>
        <General change={this.handleInputChange} />
        <Experience list={this.state.experienceList} change={this.handleInputChange} />
      </div>
    )
  }
}

export default App;
