import React, { Component } from 'react';
import {BrowserRouter as Router,browserHistory} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import { IntlProvider,addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
import antdEn from 'antd/lib/locale-provider/en_US';
import enUS from './locales/enUS.json';
import zhCN from './locales/zhCN.json';

<<<<<<< HEAD
import Page from './components/Page';
import RightBottom from './components/RightBottom';
=======
import Searchbar from './containers/Searchbar'
// import MyHeader from './containers/MyHeader'
// import Page from './components/Page';
>>>>>>> 0db157ffd6307045bec39a8a22bd5a5a1308d397
import './App.css';




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
<<<<<<< HEAD
      <LocaleProvider locale={this.state.antd}>
        <IntlProvider locale={this.state.locale} messages={this.state.messages}>
          <Router history={browserHistory}>
          <div className="App">
            <Page />
            <RightBottom />
          </div>
          </Router>
        </IntlProvider>
      </LocaleProvider>
=======
      <Router history={browserHistory}>
        <LocaleProvider locale={this.state.antd}>
          <IntlProvider locale={this.state.locale} messages={this.state.messages}>
            <div className="App">
            <Searchbar/>
                
            </div>
          </IntlProvider>
        </LocaleProvider>
      </Router>
>>>>>>> 0db157ffd6307045bec39a8a22bd5a5a1308d397
    );
  }
}

export default App