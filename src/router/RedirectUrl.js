import React, { Component } from 'react';
import {Route, Switch } from "react-router-dom";
import Home from './../components/Home';
import News from './../components/News';
import NewsDetail from './../components/NewsDetail';
import Contact from './../components/Contact';
                            
class RedirectUrl extends Component {
    render() {
        return (
            <Switch>
                 <Route exact path="/" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/news-detail/:slug.:id.html" component={NewsDetail}/>
                    <Route exact path="/contact" component={Contact}/>
            </Switch>
        );
    }
}

export default RedirectUrl;