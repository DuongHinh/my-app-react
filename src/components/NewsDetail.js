import React, { Component } from 'react';
import dt from './../data/data.json'
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {
        var count = 0;
        return (
            <div>
                {/* begin new */}
                <div>
                    <header className="masthead news">
                        <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-1 text-center">News Detail</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                
                    <div className="jumbotron jumbotron-fluid">
                        {
                            dt.map((value, key) => {
                                if(value.id === parseInt(this.props.match.params.id, 20)){
                                    return(
                                            <div className="container" key={key}>
                                                <img src={value.img} className="img-fluid img-detail" alt="react router" />
                                                <br></br>
                                                <br></br>
                                                <h3 className="lead text-center">{value.title}</h3>
                                                <p>{value.content}</p>
                                            </div>
                                        )
                                }
                                return false;
                            })
                        }
                        <div className="container">
                            <h4 className="card-title text-center">Related News</h4>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-deck">
                                        {
                                             dt.map((value, key) => {
                                                 if(value.id !== parseInt(this.props.match.params.id, 20) && count <= 3){
                                                     count++;
                                                    return(
                                                        <NewsRelated
                                                            key={key}
                                                            newsId = {value.id}
                                                            img={value.img}
                                                            title = {value.title}
                                                            summary = {value.summary}
                                                        >

                                                        </NewsRelated>
                                                     )
                                                 }
                                                 return false;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end new */}
            </div>
        );
    }
}

export default NewsDetail;