import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,disc,urlToImage,author,date,source,url}= this.props;
    return (
      <div >
      <span className="badge bg-secondary">{source}</span>

        <div className="card" style={{margin:'auto'}}>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{disc}</p>


   


    <p className="card-text"><small className="text-muted">by {author} on { new Date(date).toGMTString()}</small></p>
  

    <a href={url} rel="noreferrer"  className="btn btn-primary"  target="_blank" >READ MORE </a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
