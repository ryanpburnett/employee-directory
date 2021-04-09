import './App.css';
import axios from 'axios';
import { Component } from 'react';
import MainDiv from './components/MainDiv';
import Card from "./components/Card";

class App extends Component {
  state = {
    allEmployees: [],
    display: []
  }

  componentDidMount() {
    axios(`https://randomuser.me/api/?results=20`)
      .then(res => this.setState (
        { 
          allEmployees: res.data.results,
          display: res.data.results 
        }))
      .catch(err => console.error(err))
  }

  allEmployees = (e) => {
    this.setState({ display: this.state.results })
  }

  render() {
    console.log(this.state.display)
    return(
      <MainDiv>
      { this.state.display.map(emp => {
        return <Card { ...emp }/>
      }) }
      </MainDiv>
    )
  }
}

export default App;