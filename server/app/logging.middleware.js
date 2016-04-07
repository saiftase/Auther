'use strict';

var router = require('express').Router(),
	morgan = require('morgan');

router.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

module.exports = router;


/*
curl http://localhost:8080/ --cookie cookiesFile.txt
zuav@om.gov

curl http://localhost:8080/login -X POST -d '{"email": "zuav@om.gov", "password": "ki"}' --cookie-jar cookiesFile.txt

*/