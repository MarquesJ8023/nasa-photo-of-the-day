import React, { useState, useEffect } from 'react';
import Media from './components/Media/Media.js';

const axios = require('axios');

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=nfIXoKXfXb5pGxmbanV70k4dOopcTy9kW8U05nH8';

 function App ({ limit }) {
    //eslint-disable-next-line
	const [	API, setAPI] = useState(nasaAPI);
	const [	content, setContent] = useState('');

	useEffect(() => {
		axios.get(API)
		.then(resp => {
			setContent(resp); 
			console.log(resp);
		});		
	 }, [API]);
	 
    console.log(content.url);
    /*
    
    */
   
	return (
		<div className="container">
			<h1>Nasa Photo of the Day</h1> 
			  
                <Media imgUrl={content.url} />
                <h2 className="title">{content.title}</h2>
                <p className="date">{content.date}</p>
                <p className="explanation">{content.explanation}</p>
		     </div>
	);
}

export default App;