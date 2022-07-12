
import React, { Component } from 'react';
import axios from 'axios'; // new 

const list = [
  {
    "id": 1,
    "title": "1st todo",
    "body": "Learn Django properly"
  },
  {
    "id": 2,
    "title": "second item",
    "body": "Learn python"
  },
  {
    "id": 3,
    "title": "learn HTTP",
    "body": "it's important"
  }
]


class App extends Component {

  state = {
    todos: []
  };


  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div >
        <div>
          {this.state.todos.map(item => (
            <div>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
 
}

export default App;
