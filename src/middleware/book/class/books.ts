import { IBook,IBooks } from '../../../interface/book'
import Book from '../../../model/Book' 

export class __Books implements IBooks {
  
  create(book: IBook) {
    const { name,image,userUid,price,category } = book
    const _book = new Book({
      name,
      image,
      userUid,
      price,
      category
    })
  }
  getBooks() {}

} 
