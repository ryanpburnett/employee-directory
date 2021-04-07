import './App.css';
import axios from 'axios';
import { Component } from 'react';
import Test from './components/test';

class App extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios(`https://randomuser.me/api/?results=20`)
      .then(res => this.setState (
        { employees: res.data.results }))
      .catch(err => console.error(err))
  }

  allEmployees = (e) => {
    const all = this.state.results
    this.setState({ employees: all })
  }

  render() {
    return(
      <Test>
        allEmployees
      </Test>
    )
  }

}

export default App;