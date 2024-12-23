const express = require('express')

const router = express.Router()

router.get('/:categoriaId/productos/:productoId', (req, res) => {
  const { categoriaId, productoId } = req.params
  res.json({
    categoriaId,
    productoId
  })
})

router.get('/', (req, res) => {
  res.json([
    {
      name: 'ropa',
      description: 'esta es la categoria de ropa'
    }
  ])
})

module.exports = router
