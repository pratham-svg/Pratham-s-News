import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title ,description , imageurl , newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "25rem"}}>
              <img class="img-thumbnail" src={ !imageurl ?"https://images5.alphacoders.com/119/1196678.png":imageurl} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
