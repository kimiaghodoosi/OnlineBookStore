import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

import Karamazof from './assets/pics/karamazof.jpg';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link } from "react-router-dom";




class Book_List1 extends React.Component {
    render() {
        return(
            <Container style={{backgroundColor: "rgba(255,255,255,70%)" , margin:"5%"}}>
                <Row >
                    <Col md="3" style={{margin:"2%"}}>

                    <Link to="/book1">
                    <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                    </Link>

                    </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                        </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                    </Col>
                </Row>
                <Row >
                    <Col md="3" style={{margin:"2%"}}>

                    <Link to="/book1">
                    <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                    </Link>

                    </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                        </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                    </Col>
                </Row>
                <Row >
                    <Col md="3" style={{margin:"2%"}}>

                    <Link to="/book1">
                    <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                    </Link>

                    </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                        </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                    </Col>
                </Row>
                <Row >
                    <Col md="3" style={{margin:"2%"}}>

                    <Link to="/book1">
                    <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                    </Link>

                    </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                        </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                    </Col>
                </Row>
                <Row >
                    <Col md="3" style={{margin:"2%"}}>

                    <Link to="/book1">
                    <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                    </Link>

                    </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                        </Col>
                    <Col md="3" style={{margin:"2%"}}>

                        <Link to="/book1">
                            <img src={Karamazof} className={"img-thumbnail "} style={{  width:"80%"   }} />
                        </Link>

                    </Col>
                </Row>
               
                
            </Container>


        );
    }
}

export default Book_List1;