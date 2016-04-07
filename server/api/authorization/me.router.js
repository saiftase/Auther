var router = require('express').Router(),
	User = require('../users/user.model');

router.get('/', function(req, res, next){
	var userId = req.session.userId;
	User.findOne({_id: userId})
	.then(function(user){
		if(!user){
			res.sendStatus(401);
		}
		res.send(user);
	}).then(null, next);
});

module.exports = router; 