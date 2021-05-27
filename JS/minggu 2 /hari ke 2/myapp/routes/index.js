var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/harisatu', function(req, res, next) {
  res.render('harisatu');
});

router.get('/haridua', function(req, res, next) {
  res.render('haridua');
});


router.get('/haritiga', function(req, res, next) {
  res.render('haritiga');
});

router.post('/', function(req,res){
  var a = Number(req.body.a);
  var b = Number(req.body.b);
  var c = req.body.c;

  if(c == "tambah"){
    result = a+b;
  }
  else if(c == "kurang"){
    result = a-b;
  }
  else if(c == "bagi"){
    if(b == 0){
      result = 'Nilai Pembagi Tidak Boleh 0'
    }
    else{
      result = a/b;
    }
  }
  else if(c == "kali"){
    result = a*b;
  }
  

  res.send("Hasil = " + result);
})

module.exports = router;
