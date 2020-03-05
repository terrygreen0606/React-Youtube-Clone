import React, { useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import { YoutubeContext } from './context/youtube.context';

function App() {
	const { loadVideos } = useContext(YoutubeContext);

	useEffect(() => {
		loadVideos('react js');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container justify="center" spacing={2}>
			<Grid item xs={12}>
				<SearchBar />
			</Grid>
			<Grid item xs={12} sm={12} md={8}>
				<VideoDetails />
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<VideoList />
			</Grid>
		</Grid>
	);
}

export default App;
