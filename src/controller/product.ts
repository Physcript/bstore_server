
import { Request,Response } from 'express'


export default {
  books: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        books: 'this is a book'
      }
    })
    return
  }),
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'created books'
    })
    return
  })
}
