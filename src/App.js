import './App.css';
import axios from 'axios';
import { Component } from 'react';
import MainDiv from './components/MainDiv';
import Card from "./components/Card";
import Heading from "./components/Heading";
import AllEmployees from "./components/AllEmployees";
import EmpByAge from "./components/EmpByAge";
import LocalEmployees from "./components/LocalEmployees";

class App extends Component {
  state = {
    results: [],
    display: []
  }

  componentDidMount() {
    axios(`https://randomuser.me/api/?results=20`)
      .then(res => this.setState (
        { 
          results: res.data.results,
          display: res.data.results 
        }))
      .catch(err => console.error(err))
  }

  allEmployees = (e) => {
    this.setState({ display: this.state.results })
  }

  empByAge = (e) => {
    const sortByAge = this.state.results.sort(function(a, b) {
      return a.dob.age - b.dob.age
    })
    this.setState({ display: sortByAge })
  }

  localEmployees = (e) => {
    const local = this.state.results.filter(emp => emp.location.country === "United States")
    console.log(local)
    this.setState({ display: local })
  }

  render() {
    console.log(this.state.display)
    return(
      <MainDiv>
        <Heading />
        <AllEmployees 
          allEmployees={this.allEmployees}
        />
        <EmpByAge 
          empByAge={this.empByAge}
        />
        <LocalEmployees 
          localEmployees={this.localEmployees}
        />
        { this.state.display.map(emp => {
        return <Card { ...emp }/>
        }) }
      </MainDiv>
    )
  }
}


export default App;