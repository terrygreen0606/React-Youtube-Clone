import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

import VideoItem from './VideoItem';

const VideoList = () => {
	const { allVideos, loading } = useContext(YoutubeContext);
	if (Object.keys(allVideos).length === 0) {
		return <div>Video List</div>;
	} else if (loading) {
		return <div>Loading...</div>;
	} else {
		const listOfVideos = allVideos.videos.map((video, index) => (
			<VideoItem video={video} key={index} />
		));
		return (
			<Grid container spacing={10}>
				{listOfVideos}
			</Grid>
		);
	}
};

export default VideoList;
