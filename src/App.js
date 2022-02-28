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
      ],
      dataName: '',
      dataSay: ''
    }
  }
  handlerName(event){

    this.setState({

      dataName: event.target.value
    })
  }
  handlerSay(event){

    this.setState({

      dataSay: event.target.value
    })
  }
  resetInput(){

    this.setState({


      dataName: '',
      dataSay: ''
    })

  }
  handlerSubmit(){

    this.state.posts.push(
     
     
      {name: this.state.dataName, content: this.state.dataSay, likes:0}
      )
    
    this.setState(
    
      this.state.posts
      )
      
    this.resetInput()
  }
  render() {
    return (
      <>
      <h1>{this.state.dataName}</h1>

      <input type='text' value={this.state.dataName} placeholder='Name'  onChange={this.handlerName.bind(this)}></input>
      <input type='text' value={this.state.dataSay} placeholder='Say something' onChange={this.handlerSay.bind(this)}></input>
      <button type='button' onClick={this.handlerSubmit.bind(this)}>Post</button>
      <div className='app'>
        {this.state.posts.map(post => (
          <Post name={post.name} content={post.content} likes={post.likes} />
        ))}
      </div>
    
      
     
      </>
    );
  }}


export default App;
