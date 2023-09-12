var express = require('express');
var router = express.Router();

// GET /about/tec
router.get('/tec', function(_,responseItem) {
    responseItem.render('about-tec');
  });

  // GET /about/api/tec
router.get('/api/tec', function(_,responseObject) 
{
      responseObject.json({
      name: "TecNM Instituto Tecnológico de Gustavo A. Madero",
      description: "Universidad en la Ciudad de México",
      mission: " Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional. ",
      values: " Respeto, Liderazgo, Perseverancia, Responsabilidad",
      image: "https://pbs.twimg.com/media/FReASH1XsAUbhHq.jpg:large"
    });
});

module.exports = router;