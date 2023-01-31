//? Van a ir todas las rutas, con sus respectivos verbos y servicios relacionados
const movieServices = require('./movies.services')

const router = require('express').Router()

//! const {Router} = require('express')
//! const router = Router()

router.get('/movies', movieServices.getAllMovies)
router.post('/movies', movieServices.postNewMovie)

router.get('/movies/:id', movieServices.getMovieById)

module.exports = router //? Asi se hace un export default

