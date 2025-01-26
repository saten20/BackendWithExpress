import { Router } from 'express'
import { registor, login, dashboard } from '../controller/user.controller.js'
import { verifytoken } from '../middleware/auth.js'

const router = Router()

router.route('/registor').post(registor)
router.route('/login').post(login)

// protected Route


router.route('/dashboard').post(verifytoken, dashboard)

export default router