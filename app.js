// parse body from post requests
const bodyParser = require('body-parser')
// import the express framework
const express = require('express')
// require the path core module
const path = require('path')
// require the routes for the admin
const adminRoutes = require('./routes/admin')
// require the routes for the shop
const shopRoutes = require('./routes/shop')
// initialize app with express
const app = express();
// use imported routes in app
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// add a 404 if the request in invalid
app.use( (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// launch server on port 3000
app.listen(3000)

