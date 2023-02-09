import { createuserFactory } from './../user/useCases/createuserFactory';
import { Router } from 'express'

const createRouter = Router()
const createuserController = createuserFactory()


createRouter.post('/', createuserController.execute)

 export { createRouter }