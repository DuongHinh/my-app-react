import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewsRelated extends Component {
    
    ChangeToSlug = (str) => {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        var to   = "aaaaaeeeeeiiiiooooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    render() {
        return (
            <div className="card">
                <Link to={"/news-detail/" + this.ChangeToSlug(this.props.title) + "." + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.img} alt="react router" /></Link>
                <div className="card-body">
                    <Link to={"/news-detail/" + this.ChangeToSlug(this.props.title) + "." + this.props.newsId + ".html"}><h5 className="card-title">{this.props.title}</h5></Link>
                    <p className="card-text">{this.props.summary}</p>
                </div>
            </div>
        );
    }
}

export default NewsRelated;