import React from 'react';

function ContextPage(props){
	return(<div>
		<InputArea {...props} />
		{props.state.result.table === null ? '': <ResultArea {...props} />}
	</div>);
}
export default ContextPage;
function ResultArea(props){
	const result = props.state.result;
	return(<div>
		<h2>{result.term}</h2>
		<div className="context-table">{result.table.map(function(row, i){
			return(<DataRow row={row} index={i} key={i} actions={props.actions} />);
		})}</div>
		
	</div>);
}
function DataRow(props){
	const row = props.row;
	const to_scrollLeft = (dom) => {
		if(dom === null){
			return;
		}
		let target = dom.getElementsByTagName('span')[row[2]];
		let v = target.offsetLeft - dom.offsetLeft - 450;
		dom.scrollLeft = v;
	};
	const nextSpan = () => {
		props.actions.ShiftToSpan({
			index: props.index,
			value: 1
		});
	};
	const prevSpan = () => {
		props.actions.ShiftToSpan({
			index: props.index,
			value: -1
		});
	};
	return(<div className="row">
		<h3>{row[0]}</h3>
		<p>
			<a onClick={prevSpan}>上一個</a>&nbsp;
			<a onClick={nextSpan}>下一個</a>&nbsp;
			{Array.apply(null, Array(row[3])).map((_,i) => {
				return (row[2] === i ? <span>&#8226;</span> : <span>&#8901;</span>);
			})}
		</p>
		<div ref={to_scrollLeft}>
			<div dangerouslySetInnerHTML={{__html: row[1]}}></div>
		</div>
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