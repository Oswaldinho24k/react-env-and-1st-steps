"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
			willTransitionTo: function(transition, params, query, callback){
				if(!confirm('Quieres veeeeer?')){
					transition.abort();
				}else{
					callback();
				}
			}, 
			willTransitionFrom: function(transition, component){
				if(!confirm('ya te vaaaaass??')){
					transition.abort();
				}
			}
		},
	render: function(){
		return (
				<div>
					<h1> About</h1>
					<p> This is the blablabla</p>
					
					<ul>
						<li>React</li>
						<li>React1</li>
						<li>React2</li>
						<li>React3</li>
						<li>React4</li>
						<li>React5</li>
					</ul>
				</div>
			);
	}
});

module.exports = About;