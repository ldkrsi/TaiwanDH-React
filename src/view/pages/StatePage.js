import React from 'react';

function StatePage(props){
	const Reset = (e) => { 
		let f = confirm('確定要重設輸入資料？');
		if(f !== true){
			return;
		}
		location.reload(); 
	}
	return(<div>
		<DirectoryMetadata 
			metadata={props.state.directoryMetadata} 
			count={props.state.database.length}
		/>
		<button 
			className="warning"
			onClick={Reset}
		>Reset</button>
	</div>);
}
export default StatePage;
function DirectoryMetadata(props){
	return(<dl>
		<dt>資料夾名稱</dt>
		<dd>{props.metadata.name}</dd>
		<dt>資料夾深度</dt>
		<dd>{props.metadata.deep}層</dd>
		<dt>載入狀態</dt>
		<dd>已載入{props.count}個txt檔，共{props.metadata.textCount}個txt檔</dd>
	</dl>);
}