import React, { Component } from 'react';
import '../css/styles.scss';
import Respage from "../Pages/ResPage"
import PopOutCard from "./PopOutCard"
import { CardDeck } from 'react-bootstrap';

import "../css/myResultPage.css";

function Result (props){
    return (
        <div className="container">

            <CardDeck className="myCardDeck">
            {props.postData}
            </CardDeck>
            {console.log(props.postData)}
        </div>
    );
}

export default Result;