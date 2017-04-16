import React from 'react';

function ContextPage(props){
	return(<div>
		<InputArea {...props} />
		{props.state.result.table === null ? '': <ResultArea state={props.state} />}
	</div>);
}
export default ContextPage;
function ResultArea(props){
	const result = props.state.result;
	return(<div>
		<h2>{result.term}</h2>
		<div className="context-table">{result.table.map(function(row, i){
			return(<div className="row" key={i}>
				<h3>{row[0]}</h3>
				<p>	<a>上一個</a> <a>下一個</a>&nbsp;
					<span>&#8226;</span><span>&#8901;</span><span>&#8901;</span><span>&#8901;</span>
				</p>
				<div>
					<div dangerouslySetInnerHTML={{__html: row[1]}}></div>
				</div>
			</div>);
		})}</div>
		
	</div>);
}
function InputArea(props){
	const onChange = (e) => {props.actions.ContextTyping(e.target.value)}
	return(<div>
		<input 
			type="text" 
			placeholder="輸入詞彙"
			value={props.state.query.typing} 
			onChange={onChange}
		/>
		<button
			onClick={props.actions.ContextSubmit}
		>確定</button>
	</div>);
}
//http://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
//http://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react