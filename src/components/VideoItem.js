import React, { useContext } from 'react';
import { Paper, Typography } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

const VideoItem = ({ video }) => {
	const { selectVideo } = useContext(YoutubeContext);
	return (
		<Paper
			style={{
				alignItems: 'center',
				cursor: 'pointer',
				paddingBottom: '20px',
				width: '80%'
			}}
			onClick={() => selectVideo(video)}
		>
			<img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
			<Typography noWrap>{video.snippet.title}</Typography>
		</Paper>
	);
};

export default VideoItem;
