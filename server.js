const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

let app = express()

app.use(morgan('dev'));



app.use('*', function(req, res, next){
	next()
})



const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('De server draait op port ' + port)
})

module.exports = app