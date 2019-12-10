const Model = require('./model')

function FindAll() {
	return Model.User.find()
}
exports.FindAll = FindAll

function AddUser(user) {
	user = new Model.User(user)
	return user.save()
}
exports.AddUser = AddUser

function FindUserById(id) {
	console.log(id)
	return Model.User.findById(id)
}
exports.FindUserById = FindUserById

function UpdateById(user) {
	return Model.User.findByIdAndUpdate(user._id, user)
}
exports.UpdateById = UpdateById