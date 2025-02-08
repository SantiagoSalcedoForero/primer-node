const express = require('express')

const OrderService = require('../services/order.services')
const validationHandler = require('../middlewares/validator.handler')
const {
  getOrderSchema,
  createOrderSchema,
  addItemsSchema,
} = require('../schemas/order.schema')

const router = express.Router()
const service = new OrderService()

router.get(
  '/:id',
  validationHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const order = await service.findOne(id)
      res.json(order)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validationHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newOrder = await service.create(body)
      res.status(201).json(newOrder)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/add-items',
  validationHandler(addItemsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newItem = await service.addItems(body)
      res.status(201).json(newItem)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
