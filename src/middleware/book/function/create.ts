

import { Request,Response,NextFunction } from 'express'
import { __Books } from '../class/books'
import { IBook } from '../../../interface/book'
export async function create(req: Request, res: Response, next: NextFunction) {

  const { name,image,description,uid,price,category,count } = req.body
  const books = new __Books() 

  const user = res.locals.user ?? ''
  const _book:IBook = { name,description,image, userUid : user.uid,price,category, } 
  await books.create(_book,count, uid)
   
  next()
  return
}
