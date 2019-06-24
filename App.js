import React, {Component} from 'react';
import './App.css';
import ParkList from './components/ParkList.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component {
  // nameQuery is the search name, chosen state is the park
  constructor(props) {
    super(props);
    this.state = {nameQuery: null,
    chosenState: 'AL',
    isSearched: false
    };
  }
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
    'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','LOR','PA','RI','SC','SD','TN','TX','UT','VT','WA','WV','WI','WY'];
  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({
      isSearched: true
    })
  }
  // Set the new search query of the park name
  handleNameChange = (event) =>{
    event.preventDefault();
    console.log(this.state.chosenState)
    this.setState({
      [event.target.id]: event.target.value,
      isSearched:false
    })
  }
  // Set the new state name
  handleStateChange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
      isSearched:false
    })
  }
  render(){
    // if the search button is clicked, go ahead and render the list of parks
    let isSearched = this.state.isSearched;
    let listOfParks;
    if(isSearched){
      listOfParks = <ParkList nameQuery = {this.state.nameQuery} chosenState = {this.state.chosenState}/>
    }
    else{
      listOfParks = null;
    }
    return (
      <React.Fragment>
        {/* Search bar */}
        {
          !this.state.isSearched?
          
        <div className="container-fluid " style-prop-object="height:100vh; background-size: cover;" >
       <a className="btn asText fixed-top " href="#">National Park Service</a>

        <button className= "asText  float-right " id = "aboutButton"> About </button>
        <div className="row justify-content-center align-items-center d-flex text-center h-100 mt-5 mb-5 b-primary" >
        <form className = "mr-1 pt-5" onSubmit = {this.handleSubmit}>
        
        <section id="header" className = "jumbotron text-center"> 
              <h1 className = "display-3">National Park Service</h1>
              <hr></hr>
        </section>
          <div className="form-group form-inline d-flex justify-content-center mt-4">
            <label htmlFor="nameID"></label>
            <input type="text" className="form-control " id="nameQuery" placeholder="Enter Park Name or Event" onChange={this.handleNameChange}/>
          {/* Button triggers handleSearch() */}
          <button className= "btn btn-dark btn-rounded ml-3 " type="submit">Submit</button>
          </div>
          <div className="form-group">
            <label htmlFor="stateID"> in which state? </label>
            {/* List all of the states */}
            <select className="form-control" id="chosenState" onChange={this.handleStateChange}>
              {this.states.map(st => <option key= {st}>{st}</option>)}
            </select>
          </div>
          
        </form>
        </div>
        </div>:
        null
        // <button className= "btn btn-secondary bg-warning " onClick = {this.setState({isSearched:false})}>Submit</button>
        }
        {/* Insert list of parks here upon searching */}
        {listOfParks}
      </React.Fragment>
    );
  }
}

export default App;
