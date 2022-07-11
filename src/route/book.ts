


import express from 'express'

import con from '../controller/product'
import { create } from '../middleware/book/function/create'
import { authenticate } from '../middleware/user/auth/function/authenticate'
const router = express.Router()

router.get('/book', con.books)
router.post('/book',authenticate,create,con.create)

export default router
