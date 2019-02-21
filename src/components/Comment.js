'use strict';

import React, { Component } from "react";

class Comment extends Component {
	render() {
		return (
			<div className="comment" style={{marginBottom: '10px'}}>
				<div className="content">
					<div className="comtitle" style={{marginBottom: '5px'}}>
						<span className="author" style={{fontSize: '16px', fontWeight: 'bold'}}>{this.props.author}</span>
						<span style={{marginLeft: '20px', color: '#ccc'}}>{this.props.data}</span>
					</div>
					<div className="data">
						
					</div>
					<div className="text">{this.props.children}</div>
				</div>
			</div>
		)
	}
}

export default Comment;