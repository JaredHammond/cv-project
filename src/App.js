import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import React from 'react';
import './style/app.css'


class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const {name, value, type} = e.target;

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
