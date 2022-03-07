import React, { Component } from 'react';
import './index.css';

export class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  render() {
    const {state} = this.props;
    // console.log(state);
    return (
      <div className="row">
        {
          state.isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
          state.isLoading ? <h2>Loading...</h2> :
          state.err ? <h2 style={{color: 'red'}}>{state.err.message}</h2> :
          state.users.map(user => {
            return (
              <div key={user.id} className="card">
                <a rel='noreferrer' href={user.html_url} target="_blank">
                  <img alt='head_portrait' src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default List
