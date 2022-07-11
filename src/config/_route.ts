
import { Express,Request,Response } from 'express'
import userRoute from '../route/user'
import bookRoute from '../route/book'

module.exports = (app: Express) => {

  app.use('/api/u/', userRoute)
  app.use('/api/b/', bookRoute) 

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: 'Not found'
    })
  })
  return
}
