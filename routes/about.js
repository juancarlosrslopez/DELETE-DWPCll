var express = require('express');
var router = express.Router();

// GET /about/tec
router.get('/tec', function(_,responseItem) {
    responseItem.render('about-tec');
  });

// GET /about/api/tec
router.get('/api/tec', function(_, res) {
  const images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg"];
  const selectImagen = Math.floor(Math.random() * images.length);
  res.json({
    name: "TecNM Instituto Tecnológico de Gustavo A. Madero",
    description: "Universidad en la Ciudad de México",
    mission: "Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional.",
    values: "Respeto, Liderazgo, Perseverancia, Responsabilidad",
    image: `/images/${images[selectImagen]}`
  });
});

module.exports = router;