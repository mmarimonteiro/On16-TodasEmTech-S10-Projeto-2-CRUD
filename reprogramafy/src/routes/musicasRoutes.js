const controller = require('../controller/musicasController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)
router.get('/musics', controller.getAllMusics)

router.get('/musics/:id', controller.getMusicsById)

router.get('/musics/:artists', controller.getMusicsByArtists)

router.post('/musics', controller.createMusic)

router.put('/musics/:id', controller.updateMusica)

module.exports = router