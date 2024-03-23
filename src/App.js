
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

state={
  progress:0
}
setProgress=(progress)=>{
  this.setState({Progress:progress})
}
  pagesize=5;
  apikey=process.env.REACT_APP_NEWS_APIKEY
  render() {
    return (
      <div>
      
          <Router>
        
         <Navbar />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.Progress}
       
      />
          <Routes>    
      <Route exact path="/"  element={<News setProgress={this.setProgress} apikey={this.apikey}  pagesize={this.pagesize} key='general'category='general' country='in' />} />
      <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} key='business'  category='business' country='in' />} />
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} category='entertainment' key='entertainment'country='in' />} />
      <Route exact path="/gerneral"element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} key='gerneral' category='gerneral' country='in' />} />
      <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} key='health'category='health' country='in' />} />
      <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize}key='science' category='science' country='in' />} />
      <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize}key='sports' category='sports' country='in' />} />
      <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  pagesize={this.pagesize}key='technology'category='technology' country='in' />} />
    </Routes>
    </Router>       
      </div>
    )
  }
}


