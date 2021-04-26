import React from 'react';
import { CardDeck } from 'react-bootstrap';

import '../../css/myResultPage.css';
import '../../css/styles.scss';

const Result = (props) => {
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