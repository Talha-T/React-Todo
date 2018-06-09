import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  addClick() {

  }

  render() {
    return (
      <div>
        <h1 className="ui header">TODO List</h1>
        <p>You can see your existing TODOs below. <br/> You can also create one, or delete it.</p>
        
        <div className="ui divider"></div>
        
        <h1 className="ui header">TODOs</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
