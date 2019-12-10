const router = require('express').Router()
const Service = require('./service')

router.get('/getuser', (req, res) => {
	Service.FindAll().then(
			data => {
				res.send({
					status: 'Ok',
					message: '响应成功',
					data: data
				})
			}
		).catch(
			data => {
				res.send('Server error')
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
				res.send(data)
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
				res.send('Server error')
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
				res.send('Server error')
			}
		)
})

module.exports = router