var express = require('express');
var router = express.Router();

router.get('/:timestamp', function(req,res){
  console.log('params: '+ req.params.timestamp);

  res.json(req.params.timestamp);
});

module.exports = router;
