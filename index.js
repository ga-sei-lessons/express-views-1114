// required pacakges
const express = require('express')

// app config
const app = express()
const PORT = 8080
// tell express to use ejs for rendering
app.set('view engine', 'ejs')

// routes
// GET / -- send a view of  the home page
app.get('/', (req, res) => {
    // // when sending a static file, express needs an absolute path, hence the __dirname
    // res.sendFile(__dirname + '/views/index.html')
    // res.render prints out html from a template
    // ejs assumes there is a folder named 'views'
    // and takes a relative file path in the views folder
    // res.render('file name'. { data object })
    // pull data from your database
    //  make API request
    res.render('index.ejs', {
        name: 'Sterling Archer',
        age: 10,
        faveFood: ['sushi', 'pizza', 'ice cream', 'pb&j']
    })
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