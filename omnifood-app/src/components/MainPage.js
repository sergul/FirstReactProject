import React, { Component } from "react";
import { FeaturesSection, FavoriteMealsSection, HowItWorksSection } from './index';
import { Container } from 'react-grid-system';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <FeaturesSection />
          <FavoriteMealsSection/>
          <HowItWorksSection />
        </Container>
      </div>
      
    );
  }
}

export default MainPage;
