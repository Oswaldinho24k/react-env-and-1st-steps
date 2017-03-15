/*$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homepage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

var App = React.createClass({
	function render (){
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
}
window.addEventListener('hashchange', render);
render();*/
//React.render(<Home/>, document.getElementById('app'));
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});