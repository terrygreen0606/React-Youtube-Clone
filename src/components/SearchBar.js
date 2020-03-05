import React, { useState, useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';

import { YoutubeContext } from '../context/youtube.context';

const SearchBar = () => {
	const { loadVideos } = useContext(YoutubeContext);
	const [value, setValue] = useState('');

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		loadVideos(value);
	};
	return (
		<Paper elevation={6} style={{ padding: '25px' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					fullWidth
					label="Search..."
					onChange={handleChange}
					value={value}
				/>
			</form>
		</Paper>
	);
};

export default SearchBar;
