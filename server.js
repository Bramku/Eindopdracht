const express = require('express')
//dion moet pushen
const morgan = require('morgan')
const bodyParser = require('body-parser')
const user_routes = require('./routes/user-routes')
const ApiError = require('./model/ApiError')

let app = express()

// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
app.use(bodyParser.json());

// Installeer Morgan als logger
app.use(morgan('dev'));

app.use('*', function(req, res, next){
	next()
})

app.use('/api', user_routes)

app.get('/api/greeting', function (req, res, next) {
	let mygreeting = {
		text: "Hello all!",
		author: "Bram Kuijpers"
	}
	res.send(mygreeting)
})

// Wanneer we hier komen bestond de gevraagde endpoint niet
app.use('*', function (req, res, next) {
	console.log('De endpoint die je zocht bestaat niet')
	next("Deze endpoint bestaat niet")
})

// catch-all error handler volgens Express documentatie
// http://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
	console.log('Catch-all error handler was called.')
	console.log(err.toString())

	const error = new ApiError(err.toString(), 404)

	res.status(404).json(error).end()	
})



const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('De server draait op port ' + port)
})

module.exports = app