
import { Request,Response } from 'express'


export default {
  books: ((req: Request, res: Response) => {
    res.status(200).json({
      books: res.locals.books
    })
    return
  }),
  book: ((req: Request, res: Response) => {
    res.status(200).json({
      book: res.locals.book
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
