import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>MyNews - Top Headlines</h2>

        <div className='row'>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="descp" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="descp" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="descp" />
          </div>

        </div>
      </div>
    )
  }
}

export default news
