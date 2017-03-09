import React from 'react';
import mojs from 'mo-js';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

/*
Problems I need to solve:
1. mo.js animation buggy. isPlay not changing back to FALSE, so once the button is pressed, whenever I scroll to different sections, animation still plays (isPlay === true)

2. View of fullpage. the more sections that are added, when I scroll down to them, the later sections aren't full shown.

3. 3 experience boxes aren't flexing in row direction like I want. 

*/


function randomCornyJokes(){
	var rand = Math.floor(Math.random()*5 + 1); //I've only got 5 jokes on hand for now!

	switch(rand){
		case 1:
			return (
				`Q: How do you comfort a JavaScript bug?\n
				A: You console it.`);
		case 2:
			return (
				`Q: Why was the JavaScript developer sad?\n 
				A: Because he didn't Node how to Express himself.`);
		case 3:
			return (
				`So a programming language walks into a bar and says "Hello world"`);
		case 4: //unrelated non-programming joke. Mixing in some diversity! Plus this just makes me chuckle and chortle.
			return (
				`Q: Why did the chef kill himself? \n
				A: Because he lost the huile d'olive!`);
		default:
			return (
				`To understand what recursion is, you must first understand recursion.`);

	}

}

//======== mo-js part ============================================================

const Burst = React.createClass({
  render() {
    return (<div></div>);
  },
  
  shouldComponentUpdate () {
    this.props.isPlay && this._burst.replay();
    return false;
  },
  
  componentDidMount () {
    this._burst = new mojs.Burst({
      parent:   this.root,
      radius:   { 4: 200 },
      angle:    45,
      count:    12,
      left:     '25%',
      top:       '75%',
      isShowEnd: false,
      timeline() {
        onComplete: ()=> { 
        	console.log("onComplete was called");
        	return this.props.onComplete && this.props.onComplete(); }
      },
      children: {
        radius:       20,
        fill:         { '#D50000' : 'yellow' },
        scale:        { 1: 0, easing: 'sin.in' },
        pathScale:    [ .7, null ],
        degreeShift:  [ 13, null ],
        duration:     [ 500, 1300 ],
        isForce3d:    true
      }
    });//duration used to be [500, 700]
  }
});




//=================================================================================

class Melinda extends React.Component {
	constructor(){
		super(); //...corny sense of humour!
		this.state={
			experience: {
				frontEnd: ["HTML5", "CSS3", "ReactJS", "VanillaJS", "jQuery"],
				backEnd: ["NodeJS", "ExpressJS", "MySQL"],
				tools: ["Git", "Babel", "Webpack"]
			},
			languages: ["English", "French"],
			humour: randomCornyJokes(), //global function I offer to the world!!
			videoGames: ["Mario Kart", "Final Fantasy", "Killer Instinct"],
			boardGames: "all the gamesssss",
			energy: 10000,
			isPlay: false
		};

		this.handleClick = this.handleClick.bind(this);
		this._play = this._play.bind(this);
		this._resetPlay = this._resetPlay.bind(this);
		
	}

	_play(){ 
		console.log("_play has been called");
		this.setState({ isPlay: true }); 
	}

  	_resetPlay(){ 
  		console.log("resetPlay has been called"); //problem right now is THIS is not being called!
  		this.setState({ isPlay: false }); 
  	}

	handleClick(event){
		// console.log("Button being clicked!");
		// console.log(event);
		
		this.setState({
			humour: randomCornyJokes()
		});
	}
	renderSkill(eachSkill, index){
		return <li key={index}>{eachSkill}</li>
	}

	render(){

		let options = {
	      sectionClassName:     'section',
	      anchors:              ['hello', 'why', 'experience', 'languages', 'humour', 'energy', 'test'],
	      scrollBar:            false,
	      navigation:           true,
	      verticalAlign:        false,
	      sectionPaddingTop:    '50px',
	      sectionPaddingBottom: '50px',
	      arrowNavigation:      true
    	};

		return(
			<div className="hire-me">
				<Header>
				  <a href="#hello">Hello</a>
		          <a href="#why">Why...</a>
		          <a href="#experience">Experience</a>
		          <a href="#languages">Languages</a>
		          <a href="#humour">Humour</a>
		          <a href="#energy">Energy</a>
		          <a href="#test">Test</a>
		        </Header>
		        <Footer>
		          <a href="https://melofunkcodes.github.io/" target="_blank">My Website</a>
		          <a href="https://github.com/MelofunkCodes?tab=repositories" target="_blank">GitHub</a>
		          <a href="https://www.linkedin.com/in/melinda-yeoh" target="_blank">LinkedIn</a>
		        </Footer>
		        <SectionsContainer className="container" {...options}>
		          <Section className="custom-section" verticalAlign="true" color="#AD1457">
		          	<h1> Hiya, Leadweb!</h1>
		          </Section>
		          <Section className="custom-section" verticalAlign="true" color="#69D2E7">
		          	<h1> Here's why You Should Hire Melinda...</h1>
		          </Section>
		          <Section color="#A7DBD8">
		          	<h2>Experience</h2>
	          		<div className="expContainer">
						<div className="col-medium-3 skill">
							<h3>Front-End</h3>
							{this.state.experience.frontEnd.map(this.renderSkill)}
						</div>
						<div className="col-medium-3 skill">
							<h3>Back-End</h3>
							{this.state.experience.backEnd.map(this.renderSkill)}
						</div>
						<div className="col-medium-3 skill">
							<h3>Tools</h3>
							{this.state.experience.tools.map(this.renderSkill)}
						</div>
					</div>
		          </Section>
		          <Section color="#E0E4CC">
		          	<div>
						<h2>Languages</h2>
						{this.state.languages.map(
							(eachLang, index) => {
								return (
									<p key={index}>{eachLang}</p>
								);
							})
						}
					</div>
		          </Section>
		          <Section color="#A7DBD8">
		          	<div>
						<h2>I Tell Jokes!</h2>
						{this.state.humour}
						<br />
						<button onClick={this.handleClick}>Tell me another joke!</button>
					</div>
		          </Section>
		          <Section color="#E0E4CC">
		          	<h2>Energy</h2>
		          	<br />
              		<br />
              		<p>Hello, can you see me?</p>
					<button onClick={this._play}>Play</button>
              		<Burst isPlay={this.state.isPlay} onComplete={this._resetPlay}/>

              		<br />
              		<br />
              		<p>Hello, can you see me?</p>
		          </Section>
		           <Section color="#A7DBD8">
		          	<div>
						<h2>Test</h2>
						<p>Hello, can you see me?</p>
					</div>
		          </Section>
		        </SectionsContainer>
			</div>
		);
	}

}

export default Melinda;