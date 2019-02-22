'use strict';

import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';


class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
		$.ajax({
			url: this.props.url,
			cache: false,
			dataType: 'json',
			success:res =>{
				this.setState({
					data: res
				})
			},
			error:function(){
				console.log("error")
			},
		})
	}
	render() {
		return(
			<div className="ui contents" style={{width: '60%', margin: '40px auto'}}>
				<h1>评论</h1>
				<div className="ui divider"></div>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		)
	}
}

export default CommentBox;