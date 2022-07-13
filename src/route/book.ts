


import express from 'express'

import con from '../controller/product'
import { create } from '../middleware/book/function/create'
import { getAll } from '../middleware/book/function/getAll'
import { authenticate } from '../middleware/user/auth/function/authenticate'
const router = express.Router()

router.get('/book',getAll,con.books)
router.post('/book',authenticate,create,con.create)

export default router
