import { Router } from 'express'

import { createRouter } from './routes'


const router = Router()

router.use('/post', createRouter)

export { router }