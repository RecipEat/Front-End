import React, { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card } from 'react-bootstrap'

function PopOutCard(props) {
  const importedData = props

  return (
    <Card className="myRcard">
      <Card.Img src={props.image} alt="" className="myRcardImg" />
      <Card.Body>
        <Card.Title className="myRcardTitle">
          <p>{props.label}</p>
        </Card.Title>
        <Card.Subtitle className="myRcardSubtitle">
          <p>by: {props.source}</p>
        </Card.Subtitle>
        <div className="myClock">
          <i class="fas fa-stopwatch"></i>
          <div>{props.totalTime}</div>
        </div>
        <Card.Text className="myRcardText">
          <p>{props.description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="myRcardBottom">
        <Link to={{
          pathname: '/detail',
          tData: importedData
        }}
        >
          <Button
            onClick={() => props.saveData('tData', importedData)}
          >
            Ir
                    </Button>
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default PopOutCard