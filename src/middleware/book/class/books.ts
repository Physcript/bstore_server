import { IBook,IBooks } from '../../../interface/book'
import Book from '../../../model/Book' 
import Quantity from '../../../model/Quantity'
import { __Quantity } from '../../quantity/class/quantity'

export class __Books implements IBooks {
  
  async create(book: IBook, count: number) {
    const { name,image,userUid,price,category } = book
    const quantity = new __Quantity()  

    const _book = new Book({
      name,
      image,
      userUid,
      price,
      category
    })
    await _book.save()
    await quantity.create(_book._id, count)

  }
  getBooks() {}

} 
