// required pacakges
const express = require('express')

// app config
const app = express()
const PORT = 8080

// routes
// GET / -- send a view of  the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// GET /about -- send the about apge
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

// GET /blog -- send a page where I express my self on various topics
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html')
})

console.log(__dirname)
// console.log(__filename)

// open up listening on a port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} 🌽 (corny joke)`)
})