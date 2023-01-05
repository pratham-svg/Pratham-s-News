import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class NewBar extends Component {
    static defaultProps = {
        catagory : 'news'
      }
  static propTypes = {
    catagory : PropTypes.string
  }
     articles =[]
    constructor(){
      super();
      console.log("hello")
      this.state = { 
        articles : this.articles,
        page : 1
     }
    }
    async componentDidMount()
    {         
     
        let url =`https://newsapi.org/v2/everything?q=${this.props.catagory}&from=2023-01-04&to=2023-01-04&sortBy=popularity&apiKey=08aeedce056e40a495ed1216a1c9e7dd&page=1&pageSize=9`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles :  parseData.articles})
    }
    handlePreviousClick = async ()=>{
        let url =`https://newsapi.org/v2/everything?q=${this.props.catagory}&from=2022-12-04&sortBy=publishedAt&apiKey=08aeedce056e40a495ed1216a1c9e7dd&page=${this.state.page - 1 }&pageSize=9`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles :  parseData.articles,
         page : this.state.page + 1})
         console.log(this.state.page)
    }
    handleNextClick = async ()=>{
        let url =`https://newsapi.org/v2/everything?q=${this.props.catagory}&from=2022-12-04&sortBy=publishedAt&apiKey=08aeedce056e40a495ed1216a1c9e7dd&page=${this.state.page + 1 }&pageSize=9`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles :  parseData.articles,
         page : this.state.page - 1})
    }
  render() {
    return (
      <div className ="container my-3">
        <h1 className='text-center'>Pratham's News- Top HeadLines</h1>
        <div className="row"  >
            {this.state.articles.map((element)=>{
                return      <div className='col-md-4'>
                <NewsItem title={element.title ? element.title.slice(0,60):""} description={element.description ?element.description.slice(0,88):""} imageurl={element.urlToImage}
                 newsUrl={element.url} />
            </div>
            })}
            <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous </button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default NewBar
