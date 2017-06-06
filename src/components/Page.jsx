import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import { Icon, Button, Input, AutoComplete } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
import CardList from './pages/CardList';
const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

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