import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dt from './../data/data.json'

class News extends Component {
    render() {
        return (
            <div>
                 {/* begin news */}
               <div>
                    <header className="masthead news">
                        <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-1 text-center">News</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                    {/* begin news */}
                    <div className="container">
                        <div className="row mt-3">
                            {
                                dt.map((value, key) => {
                                    return(
                                        <NewsItem
                                         key={key}
                                         newsId = {value.id}
                                         img={value.img}
                                         title = {value.title}
                                         summary = {value.summary}
                                        >                                    
                                        </NewsItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* end news */}
            </div>


            </div>
        );
    }
}

export default News;