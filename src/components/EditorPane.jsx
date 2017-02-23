import React from 'react';
import { connect } from 'react-redux';
import { writeContent } from 'actions';
require('ace');
require('theme-monokai');
require('mode-javascript');

class EditorPane extends React.Component {
	

	//<textarea value={getExampleCode} spellCheck="false" onChange={() => dispatch(writeContent())}></textarea>
	render () {
		
		let {dispatch} = this.props;

		let getExampleCode = () => {
			console.log(ace);	
  	  let editor = ace.edit("root");
    	editor.setTheme("ace/theme/monokai");
    	editor.getSession().setMode("ace/mode/javascript");
			editor.getSession().setUseWorker(false);
			

			return `
					function foo(items) {
    				let x = "All this is syntax highlighted";
    				return x;
					}`;
		}
		
		
		return (
			<div id="editor">
				{getExampleCode()}
			</div>
		);
	}
}

export default connect()(EditorPane);
