import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
	if (title && content) {
	    dispatch(
		postAdded(title, content)
	    )

	    setTitle('')
	    setContent('')
	}
    }

    return (
	<section>
	    <form id="posts_form"></form>
	    <table style={{height: "auto"}}>
	        <tbody>
			<tr>
				<td>
				    <label htmlFor="postTitle">Nombre del Post:</label>
				    <input
					type="text"
					id="postTitle"
					name="postTitle"
	    				form="posts_form"
					value={title}
					onChange={onTitleChanged}
				    />
				</td>
				<td>
				    <label htmlFor="postContent">Descripcion:</label>
				    <textarea
					id="postContent"
					name="postContent"
	    				form="posts_form"
					value={content}
					onChange={onContentChanged}
				    />
				</td>
				<td>
				    <button 
					type="button"
	    				form="posts_form"
					onClick={onSavePostClicked}
				    >Crear</button>
				</td>
			</tr>
	        </tbody>
	    </table>
	</section>
    )
}

export default AddPostForm
