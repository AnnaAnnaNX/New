var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var x1 = req.body.x1,
      y1 = req.body.y1,
      x2 = req.body.x2,
      y2 = req.body.y2,
      x3 = req.body.x3,
      y3 = req.body.y3,
      x4 = req.body.x4,
      y4 = req.body.y4,
      x5 = req.body.x5,
      y5 = req.body.y5;

  //запись полученных точек в файл
  var data = {
    points: []
  };
  console.log('data');
  console.log(data);
  //data = JSON.parse(data); //now it an object
  data.points.push({x: req.body.x1, y: req.body.y1});
  data.points.push({x: req.body.x2, y: req.body.y2});
  data.points.push({x: req.body.x3, y: req.body.y3});
  data.points.push({x: req.body.x4, y: req.body.y4});
  data.points.push({x: req.body.x5, y: req.body.y5});
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('poligon1.json', json, 'utf8');

  //res.render('submit-front-points', { title: 'input front', x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3 });
  res.redirect('/');
});

module.exports = router;
