import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  render() {
    return (
      <div>
        This is News Component
        <NewsItem title="MyTitle" description="descp"/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>

      </div>
    )
  }
}

export default news
