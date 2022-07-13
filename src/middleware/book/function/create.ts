

import { Request,Response,NextFunction } from 'express'
import { __Books } from '../class/books'
import { IBook } from '../../../interface/book'
export async function create(req: Request, res: Response, next: NextFunction) {

  const { name,image,userUid,price,category,count } = req.body
  const books = new __Books() 
  const { uid } = res.locals.user ?? ''
  const _book:IBook = { name,image,userUid,price,category } 
  await books.create(_book,count, uid)
   
  next()
  return
}
