import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import './PostsList.css'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <tr key={post.id}>
	    <td>{post.title}</td>
	    <td>{post.content}</td>
	    <td>Eliminar</td>
	</tr>
    ))

    return (
	<section>
	    <h2>Posts</h2>
	    <table>
	        <tbody>
			<tr>
			    <th>Nombre</th>
			    <th>Descripcion</th>
			    <th>Accion</th>
			</tr>
			{renderedPosts}
	        </tbody>
	    </table>
	</section>
    )
}

export default PostsList
