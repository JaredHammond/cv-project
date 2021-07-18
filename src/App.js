import General from './components/general'
import Education from './components/education'
import Experience from './components/experience'
import React from 'react';
import './style/app.css'


class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
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
        <Education change={this.handleInputChange} />
        <Experience change={this.handleInputChange} />
      </div>
    )
  }
}

export default App;
