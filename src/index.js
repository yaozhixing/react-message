'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui/dist/semantic.min.css';
import CommentBox from './components/CommentBox';

ReactDOM.render(
	<CommentBox url="comments.json" />, 
	document.getElementById('root')
);


