import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'POST 1', content: "Hola como estan." },
    { id: '2', title: 'POST 2', content: "Estoy bien y tu." }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer
