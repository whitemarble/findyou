import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

class Page extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default Page;