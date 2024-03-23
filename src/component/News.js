import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
 static defaultProps={
country:'in',
pagesize:8,
category:'general'
 }
 static propTypes={
country: PropTypes.string,
pagesize:PropTypes.number,
category: PropTypes.string,
}

//   handelpreclick=async()=>{
//     console.log("previews")
  

   
// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f4f6f55dd034a0fbce4d47a2453102f&page=${this.state.page-1}$pagesize=${this.props.pagesize}`
//    this.setState({loading:true})
// let data= await fetch(url)
//     let parsedData= await data.json()
  
// this.setState({
//   page:this.state.page-1,
//   articles:parsedData.articles,
//   loading:false
// })
  
// }

//   handelnextclick = async()=>{
// console.log("next")
// if (this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

// }
// else{

// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f4f6f55dd034a0fbce4d47a2453102f&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
// this.setState({loading:true})
//     let data= await fetch(url)
//     let parsedData= await data.json()
    
// this.setState({
//   page:this.state.page+1,
//   articles:parsedData.articles,
 
//   loading:false
// })
// }
  
// }

 async updateNews(){
this.props.setProgress(10);
  const  url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
this.setState({loading:true})
    let data= await fetch(url)
    let parsedData= await data.json()
    this.props.setProgress(70)
this.setState({
  page:this.state.page+1,
  articles:parsedData.articles,
 
  loading:false
})
this.props.setProgress(100);


}

fetchMoreData = async () => {
this.setState({page:this.state.page+1} )
const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
this.setState({loading:true})
    let data= await fetch(url)
    let parsedData= await data.json()
    
this.setState({
  page:this.state.page+1,
  articles:this.state.articles.concat(parsedData.articles),
 
  loading:false
})


};
  constructor(props){
    super(props);
    console.log('this is an articles')
    this.state={
      articles:[],
      page:1,
      loading:false,
      totalResults:0,
    }
    document.title=`${this.props.category}-news4u`
  }
  async componentDidMount(){
    console.log('cdm')
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }

  render() {
    return (
      <div>
       <h1 style={{textAlign
      :'center'}}>TOP-HEADLINES of {this.props.category.toUpperCase()}</h1>
   


   <InfiniteScroll
  dataLength={this.state.articles.length}
  next={this.fetchMoreData}
  hasMore={this.state.articles.length!== this.state.totalResults }
  loader={ <Spinner />}
  
>
  <div className="container">

  
        <div className="row">
          { this.state.articles.map((element)=>{
            return<div className="col-md-3" key={element.url}>
            <Newsitem title={element.title} disc={element.description} urlToImage={element.urlToImage}  author={element.author} date={element.publishedAt} source={element.source.name} url={element.url}   />
          </div>
      
    })}
    </div>
    </div> 
    </InfiniteScroll>

  
          {/* <div className="container d-flex justify-content-between">
          <button  disabled={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handelpreclick}>&larr;previews</button>
          <button   disabled={(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)) }type="button" className="btn btn-primary" onClick={this.handelnextclick}>next &rarr;</button>
          </div> */}
      </div>
    );
  }
}

export default News;
