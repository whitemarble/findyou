import React, { Component } from 'react';
import {Card} from 'antd';

import myIMG from '../../../public/assets/img/placeholder.jpg';
import myAvatar from '../../../public/assets/img/avatar.jpg';
import FA from 'react-fontawesome';


class InfoCard extends Component {
    render() {
        return (
            <div className="infocard">
                <Card>
                    <div className="infocard-top">
                        <img src={myIMG} alt="img"/>
                        <div className="infocard-overlayer">
                        Thailand is the Land of a Thousand Smiles and Sawadee welcome you to enjoy their friendly service and delicious food in their uniquely Thai Restaurant. Sawadee has been an Auckland favourite for 26 years. They pride themselves on their great food and their custom-built restaurant that reflects the architecture of Thailand.
                        </div>
                        <div className="fav">
                            <FA name="heart"/>
                        </div>
                        <div className="count">
                            <FA name="clock-o"/> 2 days left
                        </div>
                        <div className="rate">
                            <FA name="star"/> 4.7
                        </div>
                    </div>
                    <div className="infocard-bot">
                        <img src={myAvatar} alt="avatar"/>
                        <div className="infocard-content">
                            <h3>Any Two Traditional Thai Mains for Two People</h3>
                            <p><FA name="bookmark"/> Category | <FA name="tags"/> tag1 tag2<span className="location"><FA name="globe"/> Auckland</span></p>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default InfoCard;