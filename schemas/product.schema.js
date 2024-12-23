const joi = require('joi')
const { get } = require('../routes/products.router')

const id = joi.string().uuid()
const name = joi.string().min(3).max(15)
const price = joi.number().integer().min(10)
const image = joi.string().uri()

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
})

const updateCreateProductSchema = joi.object({
  name: name,
  price: price,
  image: image
})

const getProductSchema = joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateCreateProductSchema, getProductSchema }