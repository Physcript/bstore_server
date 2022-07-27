
import { Request, Response, NextFunction } from 'express'
import { __Books } from '../class/books'

export async function getOne(req: Request, res: Response, next: NextFunction) {

  const { id } = req.body
  
  let _objectId = require('mongodb').ObjectId
    
    if(!_objectId.isValid(id))
      {
        res.status(401).json({
          message: 'Invalid action'
        })
        return
      }


  const book = new __Books()
  let _book: any = await book.getBook(id)

  res.locals.book = _book[0] 
  next()
  return
}
