import React, { Component } from 'react';
import {Popover,Modal,Input,Tabs} from 'antd';
import FA from 'react-fontawesome';
import MainSearch from './MainSearch'

import './MainMenu.css';
import myLogo from '../../public/assets/img/logo.png';
import myLogoSmall from '../../public/assets/img/logo-s.png';

const TabPane = Tabs.TabPane;
const mobileSearch=(<MainSearch />);

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedin: false,showReg:false};   
    }

    showRegForm = ()=>{
        this.setState({showReg:true});
    }
    closeRegForm = ()=>{
        this.setState({showReg:false});
    }

    render() {
        const register = 
            <Modal
                okText="Submit"    
                visible={this.state.showReg}
                onCancel={this.closeRegForm}
                maskClosable="true"
                width="360"
            >
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Sign In" key="1">
                        <p>Email:<br/><Input placeholder="Enter your username"/></p>
                        <p>Password:<br/><Input placeholder="Enter your password"/></p>
                    </TabPane>
                    <TabPane tab="Sign Up" key="2">
                        <p>Email:<br/><Input placeholder="Enter your username"/></p>
                        <p>Password:<br/><Input placeholder="Enter your password"/></p>
                        <p>Re-Password:<br/><Input placeholder="Re-enter your password"/></p>
                    </TabPane>
                </Tabs>
                
            </Modal>
        
        const rightArea = ()=>{
            if(this.state.loggedin)
                return(
                    <div className="right">
                        <FA name="bars"/>
                        <FA name="user"/>
                        <FA name="envelope"/>
                        <div className="mobile-search-button">
                            <Popover placement="bottomRight" content={mobileSearch} trigger="click" className="mobile-search">
                                <FA name="search"/>
                            </Popover>
                        </div>
                    </div>
                )
            else return(
                <div className="right">
                    <FA name="bars"/>
                    <a href="#" onClick={this.showRegForm}><FA name="sign-in"/></a>
                    <div className="mobile-search-button">
                        <Popover placement="bottomRight" content={mobileSearch} trigger="click" className="mobile-search">
                            <FA name="search"/>
                        </Popover>
                    </div>
                </div>
            )
        }
        return (
            <div className="main-menu">
                <img src={myLogo} alt="logo" className="logo"/>
                <img src={myLogoSmall} alt="logo" className="logo-s"/>
                {rightArea()}
                <MainSearch />
                {register}
            </div>
        );
    }
}

export default MainMenu;