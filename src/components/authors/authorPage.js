"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
//var AuthorApi = require('../../api/authorapi');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorsList');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	}, 
/*	componentDidMount: function() {
		if(this.isMounted()){
			this.setState({
				authors: AuthorApi.getAllAuthors()
			});
		}
	}, */
	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	}, 
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	}, 
	_onChange: function(){
		this.setState({ authors: AuthorStore.getAllAuthors() });
	}, 
	render: function(){
		
		return (
				<div>
					<h1>Authors</h1>
					<Link to="addAuthor" className="btn btn-default">Add</Link>
					<AuthorList authors={this.state.authors} />
				</div>
			);
	}
});
module.exports = Authors;