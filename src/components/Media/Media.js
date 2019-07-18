import React from 'react';

export default function Media (imgUrl, limit) {	
	return (
		<div className="iframeContainer">

			<iframe src={imgUrl} title="video" width={'600'} height={'400'} />
		</div>
	);
}
