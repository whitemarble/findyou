import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import CardList from './pages/CardList';

class Page extends Component {
    render() {
        return (
            <div className="main-content">
                
                <Route exact path="/" component={CardList}/>
                <FormattedMessage id='hello' defaultMessage='Hello, Howard' />
               
            </div>
        );
    }
}

export default Page;