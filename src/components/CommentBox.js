'use strict';

import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var contents = [
	{
		'author': '校长', 'data': '5分钟前', 'text': '今天天气不错！'
	},
	{
		'author': '小李', 'data': '3分钟前', 'text': '那我们一起出去玩吧！'
	}
]

class CommentBox extends Component {
	render() {
		return(
			<div className="ui contents" style={{width: '60%', margin: '40px auto'}}>
				<h1>评论</h1>
				<div className="ui divider"></div>
				<CommentList data={contents} />
				<CommentForm />
			</div>
		)
	}
}

export default CommentBox;