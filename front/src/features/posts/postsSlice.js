import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'POST 1', content: "Hola como estan." },
    { id: '2', title: 'POST 2', content: "Estoy bien y tu." }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
	    postAdded: {
		    reducer(state, action) {
	    		state.push(action.payload)
		    },
		    prepare(title, content) {
			return {
			    payload: {
				id: nanoid(),
				title,
				content
			    }
			}
		    }
	    }
    }
})

export const selectAllPosts = (state) => state.posts;

export const selectFilteredPostsByName = (state, name) => state.posts.filter(post => post.title.toLowerCase().includes(name));

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
