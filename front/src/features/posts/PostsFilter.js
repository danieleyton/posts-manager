import { useSelector } from "react-redux";
import { selectFilteredPostsByName } from "./postsSlice";
import { useState, useRef } from "react";

const PostsFilter = () => {
    const [content, setContent] = useState('')

    const onContentChanged = e => setContent(e.target.value)

    const inputRef = useRef(null);

    const onFilterPostsClicked = () => {
	setContent(inputRef.current.value);
    }

    const filteredPosts = useSelector(state => selectFilteredPostsByName(state, content))

    return (
	<section>
	    <form>
	        <input
	    	    type="text"
	    	    id="filterContent"
	    	    name="filterContent"
	    	    placeholder="Filtro de Nombre"
		    ref={inputRef}
	    	    autocomplete="off"
	        />
	    	<button
	    	    type="button"
	    	    onClick={onFilterPostsClicked}
	    	>Buscar</button>
	    </form>
	    {filteredPosts.map(post => {
		return (
			<div key={post.id}>
			    <h2>name: {post.title}</h2>
			    <h2>descripcion: {post.content}</h2>
			    <hr />
			</div>
		);
	    })}
	</section>
    ) 
}

export default PostsFilter
