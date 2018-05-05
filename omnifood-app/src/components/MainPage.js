import React, { Component } from "react";
import { FeaturesSection, FavoriteMealsSection } from './index';
import { Container } from 'react-grid-system';

class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <FeaturesSection />
        <FavoriteMealsSection/>
      </Container>
    );
  }
}

export default MainPage;
