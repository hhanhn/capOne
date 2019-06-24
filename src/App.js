import React, {Component} from 'react';
import './App.css';
import ParkList from './components/ParkList.js';
class App extends Component {
  // nameQuery is the search name, chosen state is the park
  constructor(props) {
    super(props);
    this.state = {nameQuery: null,
    chosenState: 'AL',
    isSearched: false
    };
    this.newSearch = this.newSearch.bind(this)
  }
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
    'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','LOR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({
      isSearched: true
    })
  }
  // Set the new search query of the park name
  handleNameChange = (event) =>{
    event.preventDefault();
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
  // to search again
  newSearch(someValue) {
    this.setState({
      isSearched: false
    })
  }
  render(){
    // if the search button is clicked, go ahead and render the list of parks
    let isSearched = this.state.isSearched;
    let listOfParks;
    if(isSearched){
      listOfParks = <ParkList nameQuery = {this.state.nameQuery} chosenState = {this.state.chosenState} newSearch = {this.newSearch}/>
    }
    else{
      listOfParks = null;
    }
    return (
      <React.Fragment>
        {/* Search bar */}
        {
          !this.state.isSearched?
        <div className="container-fluid " style-prop-object="height:100vh; background-size: cover; background-image: url(https://www.naturalworldsafaris.com/~/media/images/wildlife/african-elephant/kenya-wildlife-elephant-copyright-will-bolsover.jpg);" >
        
        <div className="row justify-content-center align-items-center d-flex text-center h-100 mt-5 mb-5 b-primary" >
        {/* Form for the search query */}
        <form className = "mr-1" onSubmit = {this.handleSubmit}>
        <h1>National Park Service</h1>
        <h3>Search for a Park</h3>
          <div className="form-group ">
            <label htmlFor="nameID"></label>
            <input type="text" className="form-control" id="nameQuery" placeholder="Ex: Zion National Park" onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="stateID"> <em>in which state?</em> </label>
            {/* List all of the states */}
            <select className="form-control" id="chosenState" onChange={this.handleStateChange}>
              {this.states.map(st => <option key= {st}>{st}</option>)}
            </select>
          </div>
          {/* Button triggers handleSearch() */}
          <button className= "btn btn-secondary bg-warning ">Submit</button>
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
