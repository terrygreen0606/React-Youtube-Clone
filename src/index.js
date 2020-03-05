import React from 'react';
import ReactDOM from 'react-dom';

import { YoutubeContextProvider } from './context/youtube.context';
import App from './App';

ReactDOM.render(
	<YoutubeContextProvider>
		<App />
	</YoutubeContextProvider>,
	document.getElementById('root')
);
