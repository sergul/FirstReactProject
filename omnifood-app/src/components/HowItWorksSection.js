import React from "react";
import { Row, Col } from 'react-grid-system';
import { HowItWorksItem } from './index';
import getImage from '../img/index';

const HowItWorksSection = () => {
    return (
        <section>
            <Row className="features-section-header-row" align="center">
                <Col align="center" md={12}>
                    <h2>How It Works &mdash; Simple as 1, 2, 3</h2>
                </Col>
            </Row>

            <Row>
                <Col md={6} align="right">
                    <img className="how-it-works__device-image" alt="device" src={getImage(`app-iPhone.png`)}/>
                </Col>
                <Col md={6}>
                    <HowItWorksItem number="1" text="Choose the subscription plan that best fits your needs and sign up today"/>
                    <HowItWorksItem number="2" text="Order your delicious meal using our mobile app or website.
                                                        Or you can even call us!"/>
                    <HowItWorksItem number="3" text="Enjoy your meal after less than 20 minutes. See you the next time!"/>
                    
                    <div className="btn-app-section">
                        <a href="#" alt="download-app" class="btn-app">
                            <img alt="download-app-apple" src={getImage(`download-app-apple.jpg`)}/>
                        </a>

                        <a href="#" alt="download-app" class="btn-app">
                            <img alt="download-app-apple" src={getImage(`download-app-android.png`)}/>
                        </a>
                    </div>
                    
                </Col>
            </Row>
        </section>
    );
};

export { HowItWorksSection };
