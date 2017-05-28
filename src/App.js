import React, { Component } from 'react';
import {LocaleProvider} from 'antd';
import MyHeader from './containers/MyHeader'
import './App.css';
import { connect } from 'react-redux';
import {BrowserRouter as Router,browserHistory} from 'react-router-dom';
import Page from './components/Page';
import { IntlProvider,addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
addLocaleData([
  ...enLocaleData,
  ...zhLocaleData,
])

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <LocaleProvider locale={this.props.antd}>
          <IntlProvider locale={this.props.locale} messages={this.props.messages}>
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


const mapStateToProps = (state) => {
  return {
    antd: state.MyHeaderReducer.antd,
    locale: state.MyHeaderReducer.locale,
    messages: state.MyHeaderReducer.messages
  }
}

export default connect(
  mapStateToProps
)(App)