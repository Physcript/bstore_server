

import { Request,Response,NextFunction } from 'express'
import { __Books } from '../class/books'
import { IBook } from '../../../interface/book'
export function create(req: Request, res: Response, next: NextFunction) {

  const { name,image,userUid,price,category } = req.body
  const books = new __Books() 
  const _book:IBook = { name,image,userUid,price,category }
  books.create(_book)
  console.log(_book)
  console.log(res.locals.user)
  next()
  return
}
