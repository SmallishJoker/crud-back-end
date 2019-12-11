const router = require('express').Router()
const Service = require('./service')

router.get('/getuser', (req, res) => {
	Service.QueryUsers().then(
			data => {
				res.send({
					status: 'Ok',
					message: '响应成功',
					data: data
				})
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

router.post('/adduser', (req, res) => {
	Service.AddUser(req.body).then(
			data => {
				res.send(data)
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

router.post('/finduserbyid', (req, res) => {
	Service.FindUserById(req.body.id).then(
			data => {
				res.send(data)
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

router.post('/updateuser', (req, res) => {
	Service.UpdateById(req.body).then(
			data => {
				res.send({
					status: 'OK',
					message: '更新成功'
				})
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

router.post('/deleteuser', (req, res) => {
	Service.DeleteUserById(req.body).then(
			data => {
				res.send({
					status: 'OK',
					message: 'success'
				})
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

router.post('/queryuser', (req, res) => {
	Service.QueryUsers(req.body).then(
			data => {
				res.send({
					status: 'Ok',
					message: '响应成功',
					data: data
				})
			}
		).catch(
			data => {
				res.status(500).send({
					status: 500,
					message: 'Server error'
				})
			}
		)
})

module.exports = router