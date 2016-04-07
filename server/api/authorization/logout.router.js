var router = require('express').Router(),
	User = require('../users/user.model');

router.post('/', function(req, res, next){
	if(req.session.userId){
		req.session.userId = undefined;
		res.sendStatus(200);
	}else{
		res.sendStatus(401);
	}
});

module.exports = router; 