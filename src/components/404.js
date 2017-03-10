"use strict";

var React = require('react');
var Link = require("react-router").Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
				<div>
					<h1>Page not Found</h1>
					<p>Se te perdió algo?, aquí no está!!!</p>
					<p><Link to="app">Back to Home</Link></p>
				</div>
			);
	}
});

module.exports = NotFoundPage;