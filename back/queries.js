const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'challengedb',
    port: 5432,
    password: 'somepass321',
})

const getPosts = (req, res) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
	if (error) {
	    throw error
	}
	res.status(200).json(results.row)
    })
}

const createPost = (req, res) => {
    const { title, content } = req.body

    pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content], (error, results) => {
	if (error) {
	    throw error
	}
	res.status(201).send(`Post added with ID: ${results.rows[0].id}`)
    })
}

const deletePost = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
	if (error) {
	    throw error
	}
	res.status(200).send(`Post deleted with ID: ${id}`)
    })
}

module.exports = {
    getPosts,
    createPost,
    deletePost,
}
