import React from 'react';
import Menu from './MenuView';

function AppView(props) {
	return(<div>
		{props.state.database.length === 0 ? <DirectoryInput actions={props.actions} /> : ''}
		<Menu {...props} />
		{props.state.database.length === 0 ? <div className="article">
			<h2>說明</h2>
			<p>改寫自政大資科劉昭麟教授所設計的<a href="https://sites.google.com/site/taiwandigitalhumanities/ruan-ti-gong-ju">臺灣數位人文小小讚基本文本分析、統計與語境擷取工具</a>。</p>
			<h3>特性</h3>
			<ul>
				<li>跨平台、免安裝</li>
				<li>可離線操作，不對資料進行上傳</li>
			</ul>
			<h3>示範資料</h3>
			<p>本工具提供<a href="demo1.zip">三國演義</a>和<a href="demo2.zip">韓國電影主要演員資料</a>兩個資料集當作示範資料，下載後並解壓縮，再<em>點選本頁上方的選擇資料集所在的資料夾</em>後開始操作。</p>
			<p>前者採回數分類，展示本程式對文本基本檢索，試著輸入您所知的三國人物查看他們在各回的出場狀況和出場語境；後者採上映年月份來分類，展示本程式處理階層試資料夾結構的能力，輸入<strong>吳達庶</strong>、<strong>馬東錫</strong>、<strong>趙震雄</strong>或是你所認識韓國演員查看他們的演出狀況。</p>
		</div>: ''}
		{props.state.database.length === 0 ? '' : <MainArea {...props} />}
	</div>);
}
export default AppView;

import StatePage from './pages/StatePage';
import FrequencyPage from './pages/FrequencyPage';
import ContextPage from './pages/ContextPage';

function MainArea(props){
	switch(props.state.url){
		case 'state':
			return (<StatePage {...props} />);
		case 'frequency':
			return (<FrequencyPage {...props} />);
		case 'context':
			return (<ContextPage {...props} />);
		default:
			return (<div>error</div>);
	}
}
function DirectoryInput(props){
	return(<div className="directory-input">
		<label
			htmlFor="directory-input"
		>選擇資料集所在的資料夾</label>
		<input type="file"
			id="directory-input"
			ref={(dom) => {
				if(dom === null){
					return;
				}
				dom.webkitdirectory = true;
			}}
			onChange={props.actions.InputDirChange}
		/>
	</div>);
}
