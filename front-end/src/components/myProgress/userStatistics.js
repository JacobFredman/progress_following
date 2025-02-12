import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { baseUrl } from '../../utils/StaticData';
import { axiosInstance } from '../../utils/StaticData';
import ProggressGraph from './ProggressGraph';




class UserStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            my_your_control: 0,
            my_connection_to_yourself: 0,
            my_commitment_to_success: 0,
            my_self_fulfillment: 0,
            textcontrol: '',
            textconnection: '',
            textcommitment: '',
            textfulfillment: '',

            my_your_control_relatively: 0,
            my_connection_to_yourself_relatively: 0,
            my_commitment_to_success_relatively: 0,
            my_self_fulfillment_relatively: 0,
        };
    };

    componentDidMount() {
        this.runGetData();
        this.runGetTexts();
    }

    runGetData = async () => {
        this.getData('get_user_control', 'my_your_control');
        this.getData('get_user_connection_to_yourself', 'my_connection_to_yourself');
        this.getData('get_user_commitment_to_success', 'my_commitment_to_success');
        this.getData('get_user_self_fulfillment', 'my_self_fulfillment');
        // get data relative to chapter that user holds
        this.getData('get_user_control_for_now', 'my_your_control_relatively');
        this.getData('get_user_connection_to_yourself_for_now', 'my_connection_to_yourself_relatively');
        this.getData('get_user_commitment_to_success_for_now', 'my_commitment_to_success_relatively');
        this.getData('get_user_self_fulfillment_for_now', 'my_self_fulfillment_relatively');

    }

    runGetTexts = async () => {
        this.getTexts('get_feadback', 'textcontrol', 'your_control')
        this.getTexts('get_feadback', 'textconnection', 'connection_to_yourself')
        this.getTexts('get_feadback', 'textcommitment', 'commitment_to_success')
        this.getTexts('get_feadback', 'textfulfillment', 'self_fulfillment')
    }

    getData = async (url, stateToUpdate) => {
        // const response = await axios.post(
        //     baseUrl + url,
        //     { "a": "a" },
        //     { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
        // );
        const response = await axiosInstance.post('/' + url);
        this.setState({ [stateToUpdate]: response.data.val });
    }

    getTexts = async (url, stateToUpdate, parameterName) => {
        // const response = await axios.post(
        //     baseUrl + url,
        //     { "parameterName": parameterName },
        //     { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
        // );
        const response = await axiosInstance.post(
            '/' + url,
            { "parameterName": parameterName },
        );
        this.setState({ [stateToUpdate]: response.data.val });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>מצב ביחס למקסימום הגביעים</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProggressGraph
                            header='ביחס להכל'
                            my_your_control={this.state.my_your_control}
                            my_connection_to_yourself={this.state.my_connection_to_yourself}
                            my_commitment_to_success={this.state.my_commitment_to_success}
                            my_self_fulfillment={this.state.my_self_fulfillment}
                        />
                        {/* </Col>
                    <Col> */}
                        <ProggressGraph
                            header='ביחס לפרק'
                            my_your_control={this.state.my_your_control_relatively}
                            my_connection_to_yourself={this.state.my_connection_to_yourself_relatively}
                            my_commitment_to_success={this.state.my_commitment_to_success_relatively}
                            my_self_fulfillment={this.state.my_self_fulfillment_relatively}
                        />
                    </Col>
                </Row>
                <Row style={{ textAlign: 'right' }}>
                    <Col>
                        <Row> <Col><h4 style={{ color: '#8533ff' }}>{this.state.textcontrol}</h4> </Col></Row>
                        <Row><Col>   <h4 style={{ color: '#3399ff' }}>{this.state.textconnection}</h4> </Col></Row>
                        <Row> <Col>    <h4 style={{ color: '#aaff00' }}>{this.state.textcommitment}</h4> </Col></Row>
                        <Row><Col> <h4 style={{ color: '#33ff99' }}>{this.state.textfulfillment}</h4> </Col></Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UserStatistics;