import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import FontAwesome from 'react-fontawesome';
import {FormattedMessage} from 'react-intl';

const content = (
  <div>
    <p><a href="http://localhost:3000">English</a></p>
    <p><a href="http://cn.localhost:3000">Chinese</a></p>
  </div>
);


class RightBottom extends Component {
    render() {
        return (
            <div className="right-bottom">
                <Button shape="circle" ><FontAwesome name="plus" /></Button><br/>
                <Popover placement="left" content={content} trigger="click">
                    <Button shape="circle" ><FontAwesome name="language" /></Button><br/>
                </Popover>
                <Button><FormattedMessage id='right-bottom-more' defaultMessage='More' /></Button>
            </div>
        );
    }
}

export default RightBottom;