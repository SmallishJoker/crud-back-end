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
	}
}, {
	versionKey: false
})
const User = mongoose.model('User', userSchema) // 在此处创建集合User（也就是表User）
exports.User = User

const topicSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	article: {
		type: String,
		required: true
	},
	visit: {
		type: Number,
		required: false
	},
	like: {
		type: Number,
		required: false
	},
	messageCount: {
		type: Number,
		required: false
	},
	date: {
		type: String,
		required: true
	}
}, {
	versionKey: false
})
const Topic = mongoose.model('Topic', topicSchema)
exports.Topic = Topic