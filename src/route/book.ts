


import express from 'express'

import con from '../controller/product'
import { create } from '../middleware/book/function/create'
import { getAll } from '../middleware/book/function/getAll'
import { getOne } from '../middleware/book/function/getOne'
import { authenticate } from '../middleware/user/auth/function/authenticate'
const router = express.Router()

router.get('/book',getAll,con.books)
router.post('/book',authenticate,create,con.create)
router.post('/books',getOne,con.book)
export default router
