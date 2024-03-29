const Model = require('./model')

function QueryUsers(conditions) {
	if (conditions === undefined) {
		conditions = {}
	} else {
		if (conditions.name === '') {
			conditions = {}
		}
	}
	return Model.User.find(conditions)
}
exports.QueryUsers = QueryUsers

function AddUser(user) {
	return new Promise((resolve, reject) => {
		Model.User.find({name: user.name}, function(err, result) {
			if (err) throw err

			if (result.length === 0) {
				console.log(result.length)
				user = new Model.User(user)
				user.save((err, resl) => {
					if (err) throw err

					resolve(resl)
				}) 
			} else {
				reject('User already exists')
			}
		}) 
	})
}
exports.AddUser = AddUser

function FindUserById(id) {
	return Model.User.findById(id)
}
exports.FindUserById = FindUserById

function UpdateById(user) {
	return Model.User.findByIdAndUpdate(user._id, user)
}
exports.UpdateById = UpdateById

function DeleteUserById(id) {
	return Model.User.deleteMany({ _id: { $in: id.id }})
}
exports.DeleteUserById = DeleteUserById

function QueryTopics() {
	return Model.Topic.find()
}
exports.QueryTopics = QueryTopics