




import express from 'express'

import con from '../controller/user'

import { create } from '../middleware/user/functions/create'
import { login } from '../middleware/user/functions/login'
import { logout } from '../middleware/user/functions/logout'
import { authenticate } from '../middleware/user/auth/function/authenticate'

const router = express.Router()

router.post('/create',create, con.create)
router.post('/login',login, con.login)
router.post('/auth', authenticate, con.authenticate)
router.post('/logout',logout,con.logout)

export default router

