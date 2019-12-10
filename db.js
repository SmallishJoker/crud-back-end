const mongoose = require('mongoose')

const url = 'mongodb://localhost:3005/test'

mongoose.connect(url)

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false
	}
})

const User = mongoose.model('User', userSchema)

let user = User({
	username: 'pdd',
	password: '123456',
	email: 'user@user.com'
})

// user.save((err, result) => {
// 	if (err) throw err

// 	console.log(result)
// })

User.find({}, (err, result) => {
	if (err) throw err

	console.log(result)
})