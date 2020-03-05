import React, { createContext, useReducer } from 'react';

import youtube from '../api/youtube';
import { key } from '../config/key';

const initialState = {
	allVideos: {},
	loading: false
};

const YoutubeContext = createContext();

const youtubeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'START':
			return { ...state, loading: true };
		case 'VIDEOS_LOADED':
			return {
				...state,
				allVideos: action.payload,
				loading: false
			};
		case 'SELECT_VIDEO':
			return {
				...state,
				allVideos: {
					...state.allVideos,
					selectedVideo: action.payload
				}
			};
		default:
			return state;
	}
};

const YoutubeContextProvider = props => {
	const [state, dispatch] = useReducer(youtubeReducer, initialState);

	const loadVideos = async value => {
		dispatch({
			type: 'START'
		});

		const res = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key,
				q: value
			}
		});

		dispatch({
			type: 'VIDEOS_LOADED',
			payload: {
				videos: res.data.items,
				selectedVideo: res.data.items[0]
			}
		});
	};

	const selectVideo = value => {
		dispatch({
			type: 'SELECT_VIDEO',
			payload: value
		});
	};

	return (
		<YoutubeContext.Provider
			value={{
				allVideos: state.allVideos,
				loading: state.loading,
				loadVideos,
				selectVideo
			}}
		>
			{props.children}
		</YoutubeContext.Provider>
	);
};

export { YoutubeContext, YoutubeContextProvider };
