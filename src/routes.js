"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;


var NotFoundRoute = Router.NotFoundRoute;

var routes = (
		<Route name = "app" path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/homepage')} />
			<Route name="authors" handler={require('./components/authors/authorPage')} />
			<Route name="about" handler={require('./components/about/aboutPage')} />
			<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
			<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
			<NotFoundRoute handler={require('./components/404.js')} />
			<Redirect from="about-us" to="about" />
		</Route>
	);

module.exports = routes;