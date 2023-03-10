import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
   articles = [
    {
      "source": { "id": "news-com-au", "name": "News.com.au" },
      "author": null,
      "title": "Aussie women brutally snubbed again",
      "description": "<p>The Australian women&rsquo;s cricket team is unquestionably one of the most dominant teams in the history of sport. </p>",
      "url": "https://www.news.com.au/sport/cricket/laureus-world-sports-awards-overlook-australian-womens-generational-dominance/news-story/14da12613f0a47786f5736b49a06953b",
      "urlToImage": "https://content.api.news/v3/images/bin/b0f0cb3e08a5a27f5994c566897f1b94",
      "publishedAt": "2023-02-27T05:28:00Z",
      "content": "The Australian women’s cricket team is unquestionably one of the most dominant teams in the history of sport. \r\nNot just cricket, but in any sport, across both men and women, anywhere in the world. \r… [+3056 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();
    console.log("This is a constructor from News Component")
    
    this.state = {
      articles : this.articles,
      loading : false 
    }
}

  render() {
    return (
      <div className="container my-3">
        <h2>MyNews - Top Headlines</h2>

        <div className='row'>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="descp" newsUrl="TODO" imgUrl="https://content.api.news/v3/images/bin/b0f0cb3e08a5a27f5994c566897f1b94" />
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
