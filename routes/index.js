const router = require('express').Router();

const producto = require('./producto.routes');
router.use('/productos', producto);

// const alumno = require('./alumno');
// router.use('/alumno', alumno);

module.exports = router;