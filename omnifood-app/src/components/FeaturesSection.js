import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import { FeaturesSectionItem } from './index';

const FeaturesSection = props => {
    return (
        <section>
            <Row className="features-section-header-row" align="center">
                <Col align="center" md={12}>
                    <h2>Get food fast &mdash; not fast food</h2>
                    <p className="long-copy">
                        Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking.
                        So let us take care of that, we’re really good at it, we promise!
                    </p>
                </Col>
            </Row>

            <Row className="features-section-row">
                <Col md={3} lg={3}>
                    <FeaturesSectionItem
                        icon="ion-ios-infinite-outline icon-big"
                        title="Up to 365 days/year"
                        text="Never cook again! We really mean that.
                                Our subscription plans include up to 365 days/year coverage.
                                You can also choose to order more flexibly if that's your style."/>
                </Col>
                <Col md={3} lg={3}>
                    <FeaturesSectionItem
                        icon="ion-ios-stopwatch-outline icon-big"
                        title="Ready in 20 minutes"
                        text="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home.
                                We work with the best chefs in each town to ensure that you're 100% happy."/>
                </Col>
                <Col md={3} lg={3}>
                    <FeaturesSectionItem
                        icon="ion-ios-nutrition-outline icon-big"
                        title="100% organic"
                        text="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics.            Good for your health, the environment, and it also tastes better!"/>
                </Col>
                <Col md={3} lg={3}>
                    <FeaturesSectionItem
                        icon="ion-ios-cart-outline icon-big"
                        title="Order anything"
                        text="We don't limit your creativity, which means you can order whatever you feel like.
                                You can also choose from our menu containing over 100 delicious meals. It's up to you!"/>
                </Col>
            </Row>
         </section>
        

    );
};

FeaturesSection.propTypes = {
    
};

export { FeaturesSection };