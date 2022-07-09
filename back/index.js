const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./queries')
const port = 5000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
	    extended: true,
    })
)

app.get('/', (req, res) => res.json({ info: 'Node.js, Express server API'}));

app.get('posts', db.getPosts)
app.post('/posts', db.createPost)
app.delete('/posts/:id', db.deletePost)

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
