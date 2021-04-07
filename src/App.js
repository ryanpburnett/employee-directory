import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios(`https://randomuser.me/api/?results=20`)
      .then(res => this.setState (
        { employees: res.data.res }))
      .catch(err => console.error(err))
  }

  render() {
    return(
      <div>stuff</div>
    )
  }

}

export default App;