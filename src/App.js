import React from 'react';

import Post from './Post';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {name: "Gian", content:"Gwapa kay ka", likes:2},
        {name: "Shad", content:"Pogi ko", likes:0},
        {name: "Carlos", content:"Hanging around", likes:0},
        {name: "Reyner", content:"Pagod na ako!", likes:0},
      ]
    }
  }


  render() {
    return (
      <div className='app'>
        {this.state.posts.map(post => (
          <Post name={post.name} content={post.content} likes={post.likes} />
        ))}
      </div>
    );
  }}


export default App;
