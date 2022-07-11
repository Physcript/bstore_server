




import express from 'express'

import con from '../controller/user'

import { create } from '../middleware/user/functions/create'

const router = express.Router()

router.post('/create',create, con.create)

export default router

