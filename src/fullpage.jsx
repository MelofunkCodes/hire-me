//playing with example from https://github.com/subtirelumihail/react-fullpage

import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';


class FullPage extends React.Component {
	render() {
	    let options = {
	      sectionClassName:     'section',
	      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
	      scrollBar:            false,
	      navigation:           true,
	      verticalAlign:        false,
	      arrowNavigation:      true
    	};

 
    return (
      <div>
        <Header>
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
          <a href="#sectionFour">Section Four</a>
          <a href="#sectionFive">Section Five</a>
          <a href="#sectionSix">Section Six</a>
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
          <Section color="#A7DBD8">Page 4</Section>
          <Section color="#E0E4CC">Page 5</Section>
          <Section color="#A7DBD8">Page 6</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default FullPage;