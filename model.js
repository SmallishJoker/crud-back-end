const mongoose = require('mongoose')

const url = 'mongodb://localhost:3005/test'

const Schema = mongoose.Schema

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	tags: {
		type: Array,
		required: false
	},
	age: {
		type: Number,
		required: false
	},
	key: {
		type: Number,
		required: false
	}
}, {
	versionKey: false
})

const User = mongoose.model('User', userSchema)

exports.User = User