import React, { Component } from 'react';
import '../css/styles.scss';
import Respage from "../../src/ResPage"
import PopOutCard from "./PopOutCard"
import { CardDeck } from 'react-bootstrap';
import "../css/myResultPage.css";

function Result (props){
    return (
        <div className="container">
            Hola
            <CardDeck className="myCardDeck">
            {props.postData}
            </CardDeck>
            {console.log(props.postData)}
        </div>
    );
}

export default Result;