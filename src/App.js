import React from 'react';
import { Grid } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

function App() {
	return (
		<Grid container justify="center">
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<SearchBar />
					</Grid>
					<Grid item xs={8}>
						<VideoDetails />
					</Grid>
					<Grid item xs={4}>
						<VideoList />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
