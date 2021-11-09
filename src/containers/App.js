import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import CardList from '../components/CardList';
//import {robots} from './robots'; // robots are not default to be exported
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary  from '../components/ErrorBoundary';
import './App.css'
import imgtest from '../img/imgtest.jpg';
import { setSearchField, requestRobots } from '../actions'; // returns a object
import { connect } from 'react-redux';


class App extends Component {
    /*
    constructor(){
      super()
      this.state = {
        robots: robots, // this state is fixed
      }
    }
    */

    componentDidMount(){
      this.props.onRequestRobots();
    }
    /*
    componentDidMount(){
      fetch('https://jsonplaceholder:typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots:users})});
    }
    onsearchChange = (event) =>{
      this.setState({searchfield: event.target.value});
    }
    */

    render(){
        const {searchField, onsearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot=>{
          return (robot.name.toLowerCase()
            .includes(searchField.toLowerCase()));
        })
        return !isPending ? 
            <h1>Loading</h1> :
        (
            <div className='tc'> 
              <h1 className='f1'>Robofriends</h1>
               <img src={imgtest} alt='coder' height='150' width='300' />
            <Searchbox onsearchChange={onsearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>  
            </div>   
        ) 
    }    
    
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
} /* the searchField state is going to equal a state which
     we recieve from the reducer function (searchRobots). 
     similar to searchField we also recieve states of of isPending,
     robots, error from the requestRobots reducer function. 
  */

const mapDispatchToProps = (dispatch) => {
// mapDispatchToProps will return an object that contains all of our action
  return {  
    onsearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

/*            what 'state' to listen  //  what 'action or dispatch' to listen                                        */
export default connect(mapStateToProps,mapDispatchToProps)(App);

/* NOTES:
The connect() function connects a React component to a Redux store.
*/

