import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {title, description} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem