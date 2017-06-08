import React, { Component } from 'react';
import {Popover} from 'antd';
import FA from 'react-fontawesome';
import MainSearch from './MainSearch'

import './MainMenu.css';
import myLogo from '../../public/assets/img/logo.png';
import myLogoSmall from '../../public/assets/img/logo-s.png';


const mobileSearch=(<MainSearch />);

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <img src={myLogo} alt="logo" className="logo"/>
                <img src={myLogoSmall} alt="logo" className="logo-s"/>
                <div className="right">
                    <FA name="bars"/>
                    <FA name="user"/>
                    <FA name="envelope-o"/>
                    <div className="mobile-search-button">
                        <Popover placement="bottomRight" content={mobileSearch} trigger="click" className="mobile-search">
                            <FA name="search"/>
                        </Popover>
                    </div>
                </div>
                <MainSearch />
                
            </div>
        );
    }
}

export default MainMenu;