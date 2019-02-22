'use strict';

import React, { Component } from "react";
import Comment from './Comment';

class CommentList extends Component {
	render() {
		let contentNodes = this.props.data.map( comment => {
			return(
				<Comment author={comment.author} data={comment.data}>{comment.text}</Comment>
			)
		})
		return(
			<div className="ui comList">
				<h4>评论列表</h4>
				{contentNodes}
			</div>
		)
	}
}

export default CommentList;