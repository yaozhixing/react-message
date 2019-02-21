'use strict';

import React, { Component } from "react";

class CommentForm extends Component {
	render() {
		return(
			<form className="ui reply form" style={{marginTop: '40px'}}>
				<h4>我要评论</h4>
			  <div className="field">
				<input type="text" placeholder="姓名" />
			  </div>
			  <div className="field">
				<textarea placeholder="评论"></textarea>
			  </div>
			  <button className="ui button primary" type="submit">提交</button>
			</form>
		)
	}
}

export default CommentForm;