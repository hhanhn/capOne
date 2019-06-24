import React, {Component} from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
class ParkList extends Component {
    mounted = false;
    constructor(props){
        super(props);
        this.state = {
            error: false,
            parkCodes: [],
            items: [],
            chosenState:this.props.chosenState,
            nameQuery: this.props.nameQuery,
            isLoaded: false,
            vc: [],
            cg: [],
            alerts:[],
            events:[],
            news:[],
            lessons:[],
            people:[]
        };
    }
    componentDidMount() {
        // Obtain the initial states query
        this.mounted = true;
        let url = 'https://developer.nps.gov/api/v1/parks?q=' + this.state.nameQuery + '&stateCode='+this.state.chosenState+'&api_key=mxhnif0llUeKpr38jW6UbEdpbCEG0z0ntWjMQ1Ad'
        axios.get(url)
        .then(res => {
            if(this.mounted){
                this.setState({items:res.data})
                this.getInformation();
            }

        })
    }

    getInformation(){
        const len = this.state.items.total;
        if(this.state.items.total > 0){
            // The list of the urls that will be used for all the information
            let urls = ['https://developer.nps.gov/api/v1/visitorcenters?parkCode=',
            'https://developer.nps.gov/api/v1/campgrounds?parkCode=',
            'https://developer.nps.gov/api/v1/alerts?parkCode=',
            'https://developer.nps.gov/api/v1/events?parkCode=',
            'https://developer.nps.gov/api/v1/newsreleases?parkCode=',
            'https://developer.nps.gov/api/v1/lessonplans?parkCode=',
            'https://developer.nps.gov/api/v1/people?parkCode='
            ]
            let temp = []
            for(let i = 0; i < this.state.items.total; i++){
                // Obtain parkCode
                let parkCode = this.state.items.data[i].parkCode;
                temp.push(parkCode);
                // Add to urls
                for(let j = 0; j < urls.length; j++){
                    urls[j] += parkCode;
                    if(i+1 <len){
                        urls[j] += '%2C';
                    }
                    else{
                        urls[j] += '&api_key=mxhnif0llUeKpr38jW6UbEdpbCEG0z0ntWjMQ1Ad';
                    }
                }
                
            }
            this.setState({parkCodes:temp})
            // get all the information in parallel
            Promise.all([
                axios.get(urls[0]),
                axios.get(urls[1]),
                axios.get(urls[2]),
                axios.get(urls[3]),
                axios.get(urls[4]),
                axios.get(urls[5]),
                axios.get(urls[6]),
            ])
            .then(([vc,cg,alerts,events,news,lessons,people]) => {
                // Set the states of all the information
                this.setState({
                    vc:vc.data.data,
                    cg:cg.data.data,
                    alerts:alerts.data.data,
                    events:events.data.data,
                    news:news.data.data,
                    lessons:lessons.data.data,
                    people:people.data.data,
                    isLoaded:true})
            });
        }
        
    }
    // compile all of the park information into a single park
    extractAll(){
        let parkCodes = this.state.parkCodes;
        let info = [];
        console.log(this.state.people)
        for(let i = 0; i < parkCodes.length; i++){
            info.push({parkCode: parkCodes[i]});
            info[i].latLong = 'n/a'
            info[i].name = '';
            info[i].visitorCenter= 'n/a';
            info[i].campground= 'n/a';
            info[i].alerts = 'n/a';
            info[i].events =  'n/a';
            info[i].news = 'n/a';
            info[i].lessons =  'n/a';
            info[i].people = 'n/a';
            // Obtain Names, latitude and longitude
            for(let j = 0; j < this.state.items.total; j++){
                if(this.state.items.data[j].parkCode === info[i].parkCode){
                    info[i].latLong = this.state.items.data[j].latLong;
                    info[i].name = this.state.items.data[j].name;
                    break;
                }
            }
            // Obtain Visitor Centers
            for(let j = 0; j < this.state.vc.length; j++){
                if(this.state.vc[j].parkCode === info[i].parkCode){
                    info[i].visitorCenter = this.state.vc[j].name;
                    break;
                }
            }
            // Obtain campgrounds
            for(let j = 0; j < this.state.cg.length; j++){
                if(this.state.cg[j].parkCode === info[i].parkCode){
                    info[i].campground = this.state.cg[j].name;
                    break;
                }
            }
            // Obtain alerts
            for(let j = 0; j < this.state.alerts.length; j++){
                if(this.state.alerts[j].parkCode === info[i].parkCode){
                    info[i].alerts = this.state.alerts[j].title;
                    break;
                }
            }
            // Obtain events
            for(let j = 0; j < this.state.events.length; j++){
                if(this.state.events[j].sitecode === info[i].parkCode){
                    info[i].events = this.state.events[j].title;
                    break;
                }
            }
            // Obtain news
            for(let j = 0; j < this.state.news.length; j++){
                if(this.state.news[j].parkCode === info[i].parkCode){
                    info[i].news = this.state.news[j].title;
                    break;
                }
            }
            // Obtain lessons
            for(let j = 0; j < this.state.lessons.length; j++){
                if(this.state.lessons[j].parks[0] === info[i].parkCode){
                    info[i].lessons = this.state.lessons[j].title;
                    break;
                }
            }
            // Obtain people
            for(let j = 0; j < this.state.people.length; j++){
                if(this.state.people[j].parkCode === info[i].parkCode){
                    info[i].people = this.state.people[j].title;
                    break;
                }
            }
        }
        return info;
    }
    render(){
        let display;
        // Display the list of parks if once the queue is specified
        if(this.state.isLoaded & this.state.items.total > 0){
            let info = this.extractAll()
            console.log(info)
            // display the parks
            display =<div className="d-flex p-2"><button className= "btn btn-primary" onClick = {this.props.newSearch}>New Search</button>
            {info.map((par,index) => 
            <div key ={index}className="card text-center" >
            <img className="card-img-top" src="https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180403918/98744014-stock-vector-mountains-and-lake-nature-scene-vector-illustration-design.jpg?ver=6" alt="Card cap"/>
            <div className="card-body">

            {/* Popup that includes the information */}
            <Popup trigger={<button className="button">{par.name}</button>} modal closeOnDocumentClick>
            {/* Display more detailed information */}
            <h2>{par.name}</h2>
            <p><strong>Visitor Center:</strong> {par.visitorCenter}</p>
            <p><strong>{par.latLong}</strong> </p>
            <p><strong>Nearest Campground: </strong>{par.campground}</p>
            <p><strong>Alerts: </strong>{par.alerts}</p>
            <p><strong>Events: </strong>{par.events}</p>
            <p><strong>News: </strong>{par.news}</p>
            <p><strong>Lesson Plans: </strong>{par.lessons}</p>
            <p><strong>Relevant People: </strong>{par.people}</p>
            <span> <em>Click Outside to Close</em></span>
            </Popup>
            </div>
            </div>)}
            </div>
        }
        else if (!this.state.isLoaded){
            display = <h1 className = "loading">Loading.....</h1>
        }
        else{
            display = <h1>None found</h1>
        }
        return (
            <React.Fragment>
                {display}
            </React.Fragment>
            
        )
    }
}

export default ParkList;