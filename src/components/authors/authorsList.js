"use strict";
var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},
	deleteAuthor: function(id, event){
		event.preventDefault();
		debugger;
		confirm('you sure???');
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
	}, 
	render: function(){
		var createAuthorRow = function(author){
			return (
					<tr key={author.id}>
						<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)} className="btn btn-danger">Delete</a></td>
						<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
						<td>{author.firstName}</td>
						<td>{author.lastName}</td>
					</tr>
				);
		};
		return (
				<div>
					
					<table className="table">
						<thead>
							<th>lol</th>
							<th>Id</th>
							<th>Name</th>
							<th>Last Name</th>
						</thead>
						<tbody>
							{this.props.authors.map(createAuthorRow, this)}
						</tbody>
					</table>
				</div>
				);
		}
});
module.exports = AuthorList;