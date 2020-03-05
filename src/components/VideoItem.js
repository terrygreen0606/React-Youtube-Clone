import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

const VideoItem = ({ video }) => {
	const { selectVideo } = useContext(YoutubeContext);
	return (
		<Grid item xs={12}>
			<Paper
				style={{
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer'
				}}
				onClick={() => selectVideo(video)}
			>
				<img
					style={{ marginRight: '20px' }}
					src={video.snippet.thumbnails.medium.url}
					alt="thumbnail"
				/>
				<Typography variant="subtitle1">
					<b>{video.snippet.title}</b>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default VideoItem;
