import React from 'react';
import mojs from 'mo-js';
// import Infinite from 'react-infinite';

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
		case 5:
			return (
				`To understand what recursion is, you must first understand recursion.`);

	}

}

//======== mo-js part ============================================================
const whirlE = mojs.easing.path('M0,3.3S104.4,146.8,104.4,366.8c0,0,10.6-586.5,68.8-76.5,0,0,40.6-359.4,88.8-50,0,0,35.3-194.7,74.7-15.9,0,0,35.9-81.8,63.2,2.4');

const burst = new mojs.Burst({ 
  left: 0, top: 0,
  radius: { 0: 200 },
  count: 12,
  children: {
    shape: 'polygon',
    radius: 20,
    angle: { 360: 0 },
    fill: { '#f70909' : '#eddc80' },
    duration: 1300
  }
});

const circle = new mojs.Shape({
  left: 0, top: 0,
  count: 10,
  stroke: { '#e2441d' : '#f99931' },
  strokeWidth: { 20 : 0 },
  fill: 'none',
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 200 },
  duration: 1000,
  opacity:  { 1: 0.2 }
});

class Whirl extends mojs.CustomShape {
  getShape () {
    return '<path d="M50.9,17c0.5,0.1,1,0.2,1.5,0.3c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2c0.2-0.8-0.3-1.6-1.1-1.8c-0.5-0.1-1-0.2-1.6-0.3    c-0.8-0.2-1.6,0.4-1.8,1.2C49.5,16,50,16.8,50.9,17z"></path><path d="M57.1,18.7c15.5,5.9,19.7,20.1,19.7,27.6c0,9.7-7.5,24.2-23.4,24.2c-7.1,0-13-3.7-15.8-9.9c-2.3-5.2-1.9-11,1.2-14.4    c0.5-0.6,0.5-1.6-0.1-2.1c-0.6-0.5-1.6-0.5-2.1,0.1c-3.9,4.4-4.5,11.3-1.7,17.6c3.3,7.3,10.2,11.6,18.5,11.6    c18,0,26.4-16.2,26.4-27.2c0-11.1-6.7-24.8-21.6-30.4c-0.8-0.3-1.6,0.1-1.9,0.9C55.9,17.5,56.3,18.4,57.1,18.7z"></path><path d="M84.8,49.7C84,49.5,83.2,50,83,50.9c-0.1,0.5-0.2,1-0.3,1.5c-0.2,0.8,0.3,1.6,1.1,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.6C86.1,50.6,85.6,49.8,84.8,49.7z"></path><path d="M83.2,56.2c-0.8-0.3-1.6,0.1-1.9,0.9c-5.9,15.5-20.1,19.7-27.6,19.7c-9.7,0-24.2-7.5-24.2-23.4c0-7.1,3.7-13,9.9-15.8    c5.2-2.3,11-1.9,14.4,1.2c0.6,0.5,1.6,0.5,2.1-0.1c0.5-0.6,0.5-1.6-0.1-2.1c-4.4-3.9-11.3-4.5-17.6-1.7    C30.9,38.1,26.5,45,26.5,53.3c0,18,16.2,26.4,27.2,26.4c11.1,0,24.8-6.7,30.4-21.6C84.4,57.3,84,56.5,83.2,56.2z"></path><path d="M49.1,83c-0.5-0.1-1-0.2-1.5-0.3c-0.8-0.2-1.6,0.3-1.8,1.1c-0.2,0.8,0.3,1.6,1.1,1.8c0.5,0.1,1,0.2,1.6,0.3    c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2C50.5,84,50,83.2,49.1,83z"></path><path d="M42.9,81.3c-15.5-5.9-19.7-20.1-19.7-27.6c0-9.7,7.5-24.2,23.4-24.2c7.1,0,13,3.7,15.8,9.9c2.3,5.2,1.9,11-1.2,14.4    c-0.5,0.6-0.5,1.6,0.1,2.1c0.6,0.5,1.6,0.5,2.1-0.1c3.9-4.4,4.5-11.3,1.7-17.6C61.9,30.9,55,26.5,46.7,26.5    c-18,0-26.4,16.2-26.4,27.2c0,11.1,6.7,24.8,21.6,30.4c0.2,0.1,0.4,0.1,0.5,0.1c0.6,0,1.2-0.4,1.4-1    C44.1,82.5,43.7,81.6,42.9,81.3z"></path><path d="M16.2,45.9c-0.8-0.2-1.6,0.3-1.8,1.1c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.8,0.4,1.6,1.2,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.5C17.5,46.9,17,46.1,16.2,45.9z"></path><path d="M46.3,23.3c9.7,0,24.2,7.5,24.2,23.4c0,7.1-3.7,13-9.9,15.8c-5.2,2.3-11,1.9-14.4-1.2c-0.6-0.5-1.6-0.5-2.1,0.1    c-0.5,0.6-0.5,1.6,0.1,2.1c2.6,2.3,6,3.4,9.7,3.4c2.6,0,5.3-0.6,7.9-1.8c7.3-3.3,11.6-10.2,11.6-18.5c0-18-16.2-26.4-27.2-26.4    c-11.1,0-24.8,6.7-30.4,21.6c-0.3,0.8,0.1,1.6,0.9,1.9c0.8,0.3,1.6-0.1,1.9-0.9C24.6,27.4,38.8,23.3,46.3,23.3z"></path>';
  }
}
mojs.addShape( 'whirl', Whirl );

const whirl = new mojs.Shape({
  left: 0, top: 0,
  shape: 'whirl',
  angle: { "-800" : 0 },
  fill: { '#e2441d' : 'yellow' },
  scale:  { 0 : 1 },
  easing: whirlE,
  duration: 1300,
  opacity:  { 0: 1 },
  radius: 100
}); //radius originally 60

const timeline = new mojs.Timeline();

timeline
  .add( burst, circle, whirl );

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

document.addEventListener(clickHandler, function(e) {
  const coords = { x: e.pageX, y: e.pageY };
  
  burst.tune(coords);
  circle.tune(coords);
  whirl.tune(coords);
  
  timeline.replay();
}, false);

// const Burst = React.createClass({
// 	constructor(){
// 		super();

// 		this.handleClick=this.handleClick.bind(this);
// 	},
// 	handleClick(){
// 		const whirlE = mojs.easing.path('M0,3.3S104.4,146.8,104.4,366.8c0,0,10.6-586.5,68.8-76.5,0,0,40.6-359.4,88.8-50,0,0,35.3-194.7,74.7-15.9,0,0,35.9-81.8,63.2,2.4');

// 		const burst = new mojs.Burst({ 
// 		  left: 0, top: 0,
// 		  radius: { 0: 200 },
// 		  count: 12,
// 		  children: {
// 		    shape: 'polygon',
// 		    radius: 20,
// 		    angle: { 360: 0 },
// 		    fill: { '#f70909' : '#eddc80' },
// 		    duration: 1300
// 		  }
// 		});

// 		const circle = new mojs.Shape({
// 		  left: 0, top: 0,
// 		  count: 10,
// 		  stroke: { '#e2441d' : '#f99931' },
// 		  strokeWidth: { 20 : 0 },
// 		  fill: 'none',
// 		  scale: { 0: 1.5, easing: 'elastic.out' },
// 		  radius: { 0: 200 },
// 		  duration: 1000,
// 		  opacity:  { 1: 0.2 }
// 		});

// 		class Whirl extends mojs.CustomShape {
// 		  getShape () {
// 		    return '<path d="M50.9,17c0.5,0.1,1,0.2,1.5,0.3c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2c0.2-0.8-0.3-1.6-1.1-1.8c-0.5-0.1-1-0.2-1.6-0.3    c-0.8-0.2-1.6,0.4-1.8,1.2C49.5,16,50,16.8,50.9,17z"></path><path d="M57.1,18.7c15.5,5.9,19.7,20.1,19.7,27.6c0,9.7-7.5,24.2-23.4,24.2c-7.1,0-13-3.7-15.8-9.9c-2.3-5.2-1.9-11,1.2-14.4    c0.5-0.6,0.5-1.6-0.1-2.1c-0.6-0.5-1.6-0.5-2.1,0.1c-3.9,4.4-4.5,11.3-1.7,17.6c3.3,7.3,10.2,11.6,18.5,11.6    c18,0,26.4-16.2,26.4-27.2c0-11.1-6.7-24.8-21.6-30.4c-0.8-0.3-1.6,0.1-1.9,0.9C55.9,17.5,56.3,18.4,57.1,18.7z"></path><path d="M84.8,49.7C84,49.5,83.2,50,83,50.9c-0.1,0.5-0.2,1-0.3,1.5c-0.2,0.8,0.3,1.6,1.1,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.6C86.1,50.6,85.6,49.8,84.8,49.7z"></path><path d="M83.2,56.2c-0.8-0.3-1.6,0.1-1.9,0.9c-5.9,15.5-20.1,19.7-27.6,19.7c-9.7,0-24.2-7.5-24.2-23.4c0-7.1,3.7-13,9.9-15.8    c5.2-2.3,11-1.9,14.4,1.2c0.6,0.5,1.6,0.5,2.1-0.1c0.5-0.6,0.5-1.6-0.1-2.1c-4.4-3.9-11.3-4.5-17.6-1.7    C30.9,38.1,26.5,45,26.5,53.3c0,18,16.2,26.4,27.2,26.4c11.1,0,24.8-6.7,30.4-21.6C84.4,57.3,84,56.5,83.2,56.2z"></path><path d="M49.1,83c-0.5-0.1-1-0.2-1.5-0.3c-0.8-0.2-1.6,0.3-1.8,1.1c-0.2,0.8,0.3,1.6,1.1,1.8c0.5,0.1,1,0.2,1.6,0.3    c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2C50.5,84,50,83.2,49.1,83z"></path><path d="M42.9,81.3c-15.5-5.9-19.7-20.1-19.7-27.6c0-9.7,7.5-24.2,23.4-24.2c7.1,0,13,3.7,15.8,9.9c2.3,5.2,1.9,11-1.2,14.4    c-0.5,0.6-0.5,1.6,0.1,2.1c0.6,0.5,1.6,0.5,2.1-0.1c3.9-4.4,4.5-11.3,1.7-17.6C61.9,30.9,55,26.5,46.7,26.5    c-18,0-26.4,16.2-26.4,27.2c0,11.1,6.7,24.8,21.6,30.4c0.2,0.1,0.4,0.1,0.5,0.1c0.6,0,1.2-0.4,1.4-1    C44.1,82.5,43.7,81.6,42.9,81.3z"></path><path d="M16.2,45.9c-0.8-0.2-1.6,0.3-1.8,1.1c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.8,0.4,1.6,1.2,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.5C17.5,46.9,17,46.1,16.2,45.9z"></path><path d="M46.3,23.3c9.7,0,24.2,7.5,24.2,23.4c0,7.1-3.7,13-9.9,15.8c-5.2,2.3-11,1.9-14.4-1.2c-0.6-0.5-1.6-0.5-2.1,0.1    c-0.5,0.6-0.5,1.6,0.1,2.1c2.6,2.3,6,3.4,9.7,3.4c2.6,0,5.3-0.6,7.9-1.8c7.3-3.3,11.6-10.2,11.6-18.5c0-18-16.2-26.4-27.2-26.4    c-11.1,0-24.8,6.7-30.4,21.6c-0.3,0.8,0.1,1.6,0.9,1.9c0.8,0.3,1.6-0.1,1.9-0.9C24.6,27.4,38.8,23.3,46.3,23.3z"></path>';
// 		  }
// 		}
// 		mojs.addShape( 'whirl', Whirl );

// 		const whirl = new mojs.Shape({
// 		  left: 0, top: 0,
// 		  shape: 'whirl',
// 		  angle: { "-800" : 0 },
// 		  fill: { '#e2441d' : 'yellow' },
// 		  scale:  { 0 : 1 },
// 		  easing: whirlE,
// 		  duration: 1300,
// 		  opacity:  { 0: 1 },
// 		  radius: 100
// 		}); //radius originally 60

// 		const timeline = new mojs.Timeline();

// 		timeline
// 		  .add( burst, circle, whirl );

// 		timeline.replay();
// 	},
// 	render(){
// 		return (<button onClick={this.handleClick}>How much energy do I have?</button>)
// 	}
// })
//===================================================

// const Burst = React.createClass({
//   render() {
//     return (<div className="logoReveal" ref="logo"></div>);
//   },


//   componentDidMount () {
//     this._burst = new mojs.Burst({
//       parent:   this.refs.logo,
//       radius:   { 4: 49 },
//       angle:    45,
//       count:    12,
//       isShowEnd: false,

//       children: {
//         radius:       100,
//         fill:         '#ecdded',
//         scale:        { 1: 0, easing: 'sin.in' },
//         pathScale:    [ .7, null ],
//         degreeShift:  [ 13, null ],
//         duration:     1500,
//         isForce3d:    true
//       }
//     }).play();

//       new mojs.Shape({
//         parent:   this.refs.logo,
//       shape:  			'circle',
//       scale:   			{ 0 : 1.5, easing: 'cubic.out' },
//       fill:         { '#FFF': '#362648', easing: 'cubic.out' },
//       delay:        1500,
//       duration:     1500,
//       repeat:       0,
//     }).play();


//         this.logoFull = new mojs.Shape({
//           parent:   this.refs.logo,
//             shape:    'logoFull',
//             height : 600,
//             width: 1000,
//             scale: 0.215,
//             duration: 500,
//             fill: 'white',
//             origin: '450 270',
//             opacity: {0:1},
//             delay: 2100
//           }).play();
//   }
// });


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
			loading: false
		};

		this.handleClick = this.handleClick.bind(this);
		
	}
	// componentDidMount(){
	// 	this.fetchData();
	// }
	// fetchData(){
	// 	this.setState({
	// 		loading: true
	// 	});

	// 	fetch(`https://api.github.com/users/${this.props.params.username}/repos?page=${this.state.page}&per_page=50`)
	// 	.then(response=>response.json())
	// 	.then(function(data){
	// 		this.setState({
	// 			repos: this.state.repos.concat(data),
	// 			loading: false,
	// 			page: this.state.page+1,
	// 			endOfTheLine: data.length===0
	// 		});
	// 	}.bind(this));
	// }
	handleClick(){
		this.setState({
			humour: randomCornyJokes()
		});
	}
	renderSkill(eachSkill, index){
		return <li key={index}>{eachSkill}</li>
	}

	render(){
		//console.log("username: ", this.props.params.username);
		// if(!this.state.repos){
		// 	return (
		// 		<div>
		// 			LOADING REPOSITORIES...
		// 		</div>
		// 	);
		// }

		return(
			<div className="hire-me">
				<h1> Why You Should Hire Melinda...</h1>
				<div>
					<h2>Experience</h2>
					<div>
						<h3>Front-End</h3>
						{this.state.experience.frontEnd.map(this.renderSkill)}
					</div>
					<div>
						<h3>Back-End</h3>
						{this.state.experience.backEnd.map(this.renderSkill)}
					</div>
					<div>
						<h3>Tools</h3>
						{this.state.experience.tools.map(this.renderSkill)}
					</div>
				</div>
				<br />
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
				<br />
				<div>
					<h2>Humour</h2>
					{this.state.humour}
					<br />
					<button onClick={this.handleClick}>Tell me another joke!</button>
				</div>
				<div className="energy">
					<h2>Energy</h2>
				
				</div>
			</div>
		);
	}

}

export default Melinda;