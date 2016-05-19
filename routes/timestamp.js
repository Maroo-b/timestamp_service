var express = require('express');
var router = express.Router();
var TimeUtil = require('../utils/time_util');

router.get('/:timestamp', function(req,res){
  var timestamp = req.params.timestamp;
  res.json( TimeUtil.convert(timestamp));
});


module.exports = router;
