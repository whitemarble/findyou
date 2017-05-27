import React, { Component } from 'react';
import {LocaleProvider} from 'antd';
import MyHeader from './containers/MyHeader'
import './App.css';
import { connect } from 'react-redux';
import {BrowserRouter as Router,browserHistory} from 'react-router-dom';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <MyHeader />
          <LocaleProvider locale={this.props.locale}>
            <Page />
          </LocaleProvider>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    locale: state.MyHeaderReducer.locale
  }
}

export default connect(
  mapStateToProps
)(App)