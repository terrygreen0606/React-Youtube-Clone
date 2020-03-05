import React, { useContext } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

import VideoItem from './VideoItem';

const VideoList = () => {
	const { allVideos, loading } = useContext(YoutubeContext);
	if (loading || Object.keys(allVideos).length === 0) {
		return <CircularProgress />;
	} else {
		const listOfVideos = allVideos.videos.map((video, index) => (
			<VideoItem video={video} key={index} />
		));
		return (
			<Grid container justify="center">
				{listOfVideos}
			</Grid>
		);
	}
};

export default VideoList;
