import React from "react";
import "../css/styles.scss";
import hat from '../assets/img/chef-hat.svg';


export default function PageLoading() {
    return (
        <div className="container">
            <img src={hat}/>
        </div>
    )
}