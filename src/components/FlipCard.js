import React from "react";
import '../css/myAboutUs.css';
import { Card } from 'react-bootstrap'

let twitterLogo = "https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"
let linkedinLogo = "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
let githubLogo = "https://www.flaticon.com/premium-icon/icons/svg/3291/3291695.svg"
let emailLogo = "https://www.flaticon.com/svg/static/icons/svg/646/646135.svg"

class CardBack extends React.Component {
    render() {
        const color = this.props.info.member === "Front-End" ? "royalblue" : "palevioletred"
        return(
            <div className='card-side back'>
                <div className="back-text">
                    <Card.Text>
                        <b>Especialities:</b> {this.props.info.especialities}
                    </Card.Text>
                    <Card.Text>
                        <b>Education:</b> {this.props.info.education}
                    </Card.Text>
                    <Card.Text>
                        <b>Member:</b>{this.props.info.member}
                    </Card.Text>
                </div>
                <div className="myLinks">
                    <a
                        href={this.props.info.twitter}>
                        <img
                            src={twitterLogo}
                            alt=""
                            className="linkLogos"
                        />
                    </a>
                    <a
                        href={this.props.info.linkedin}>
                        <img
                            src={linkedinLogo}
                            alt=""
                            className="linkLogos"
                        />
                    </a>
                    <a
                        href={this.props.info.github}>
                        <img
                            src={githubLogo}
                            alt=""
                            className="linkLogos"
                        />
                    </a>
                    <a
                        href={this.props.info.email}>
                        <img
                            src={emailLogo}
                            alt=""
                            className="linkLogos"
                        />
                    </a>
                </div>
            </div>
        )
    }
}

// Back
class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side front'>
                <img
                        class="picture"
                        src={this.props.info.img}
                        alt=""
                    />
                <div className="name-position">
                    <h3 className="front-text">{this.props.info.name}</h3>
                </div>
            </div>
        )
    }
}

// Main Component
class CardFlip extends React.Component {
    render() {
        return(
            <div className='containerCard'>
                <div className='c-body'>
                    <CardBack info={this.props}/>
                    <CardFront info={this.props}/>
                </div>
            </div>
        )
    }
}

export default CardFlip