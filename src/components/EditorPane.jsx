import React from 'react';
import { connect } from 'react-redux';
import { writeContent } from 'actions';
import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class EditorPane extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log(ace);	
		//ace.config.set('basePath', 'ace/');
		const editor = ace.edit('editor');
		editor.getSession().setMode('ace/mode/javascript');
		editor.setTheme('ace/theme/monokai');
		editor.getSession().setUseWorker(false);

	}

	//<textarea value={getExampleCode} spellCheck="false" onChange={() => dispatch(writeContent())}></textarea>
	render () {
		
		let {dispatch} = this.props;

		let getExampleCode = () => {
			
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
