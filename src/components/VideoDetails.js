import React, { useContext } from 'react';
import { Paper, Typography } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

const VideoDetails = () => {
	const { allVideos, loading } = useContext(YoutubeContext);

	if (loading || Object.keys(allVideos).length === 0) {
		return <div>Loading...</div>;
	} else {
		const video = allVideos.selectedVideo;
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (
			<>
				<Paper elevation={6} style={{ height: '70%' }}>
					<iframe
						src={videoSrc}
						frameBorder="0"
						width="100%"
						height="100%"
						title="Video Player"
					/>
				</Paper>
				<Paper elevation={6} style={{ padding: '15px' }}>
					<Typography variant="h4">{video.snippet.title}</Typography>
					<Typography variant="subtitle1">
						{video.snippet.channelTitle}
					</Typography>
					<Typography variant="subtitle2">
						{video.snippet.description}
					</Typography>
				</Paper>
			</>
		);
	}
};

export default VideoDetails;
