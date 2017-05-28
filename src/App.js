import React, { Component } from 'react';
import {LocaleProvider} from 'antd';
import MyHeader from './containers/MyHeader'
import './App.css';
import {BrowserRouter as Router,browserHistory} from 'react-router-dom';
import Page from './components/Page';

import { IntlProvider,addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
import antdEn from 'antd/lib/locale-provider/en_US';
import enUS from '../public/assets/locales/enUS.json';
import zhCN from '../public/assets/locales/zhCN.json';



class App extends Component {
  constructor(props) {
    super(props);
    switch(window.location.href.substr(7,3))
    {
      case 'cn.':
      addLocaleData([...zhLocaleData])
      this.state = {locale:'zh-Hans-CN', messages:zhCN, antd:null};    
      break;
      default:
      addLocaleData([...enLocaleData])
      this.state = {locale:'en-US', messages:enUS, antd:antdEn}; 
      break;
    }
       
  }
  
  render() {
    return (
      <Router history={browserHistory}>
        <LocaleProvider locale={this.state.antd}>
          <IntlProvider locale={this.state.locale} messages={this.state.messages}>
            <div className="App">
              <MyHeader />
                
                  <Page />
                
            </div>
          </IntlProvider>
        </LocaleProvider>
      </Router>
    );
  }
}

export default App