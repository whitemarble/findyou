import React, { Component } from 'react';
import {toChinese,toEnglish} from '../actions/MyHeaderAction.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'antd';


class MyHeader extends Component {
    render() {
        const{Chinese,English} = this.props;
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Button onClick={Chinese}>中文</Button></li>
                <li><Button onClick={English}>English</Button></li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({Chinese:toChinese,
  English:toEnglish}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHeader)