//Modules and Globals
require('dotenv').config()
const express = require('express');
const app = express();
const methodOverride = require('method-override')



//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

//Controllers and Routers

app.get('/', (req, res) => {
    res.send('Loreology')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)


