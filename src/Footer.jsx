import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'
import {Icon, Segment, Button} from 'semantic-ui-react'
import logo from './images/logo.png'

class Footer extends Component {

    actualYear = () => {
        let date = new Date();
        let year = date.getFullYear();
        return year
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-logo-container">
                    <Image className="footer-image" src={logo} alt="trip advisor logo"/>
                    <Header className="footer-title">TravelAdvisor</Header>
                </div>
                <div className="ygl-btn">
                <Button href="https://youtu.be/t04bmG8gYdw" circular color='youtube' icon='youtube' />
                 <Button href="https://www.linkedin.com/in/saimi1992/" circular color='linkedin' icon='linkedin' />
                 <Button href="https://github.com/saimaar/TravelAdvisor" circular color="black" icon='github' />
                </div>
                <span className="footer-certified-logo">&copy; {this.actualYear()} TravelAdvisor All rights reserved.</span>
                <p className="footer-website-rights">TravelAdvisor is not a booking agent or tour operator, and does not charge any service fees to users of our site. Our mission is to provide you the best informations for your traveling. For booking please contact any airlines, travel providers, and booking agents who list airfare, tours, and travel packages. TravelAdvisor</p>
            </div>
        );
    }
}

export default Footer;
