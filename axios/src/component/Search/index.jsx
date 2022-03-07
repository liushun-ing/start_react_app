import React, { Component } from "react";
import axios from 'axios';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSearch = () => {
    const {keyWordElement:{value: keyWord}} = this;
    this.props.updateState({isFirst: false, isLoading: true});
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then(
        response => {this.props.updateState({isLoading: false, users: response.data.items})},
        error => {this.props.updateState({isLoading: false, err: error})}
      )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
            <button onClick={this.doSearch}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
