import React from 'react';

function ExportComponent(props){
	return(<p><a 
		download={props.name}
		href={URL.createObjectURL(props.blobObject)}
	>{props.text}</a></p>);
}
export default ExportComponent;