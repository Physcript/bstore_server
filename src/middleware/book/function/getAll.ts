
import { Request,Response,NextFunction } from 'express'
import { __Books } from '../class/books'

export async function getAll (req: Request, res: Response, next: NextFunction) {
  const books = new __Books()
  const book = await books.getBooks()
  res.locals.books = book

  next()
  return
}
