import React, { Component } from 'react';
import './Search.css';
import './App.css'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachValue: '',
    }
  }

  handleState = (e) => {
    this.setState({
      searchValue: e.target.value
    })

    this.props.filterBuffy(e.target.value);
    this.props.filterAngel(e.target.value);
  } 


  render() {
    return (
      <div className="search-bar-container">
        <input type="text" placeholder="Search for your favorite Buffy or Angel episodes" onKeyUp={this.handleState}/>

      </div>
    );
  }
}