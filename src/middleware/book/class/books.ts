import { IBook,IBooks } from '../../../interface/book'
import Book from '../../../model/Book' 
import Quantity from '../../../model/Quantity'
import mongoose from 'mongoose'
import { __Quantity } from '../../quantity/class/quantity'

export class __Books implements IBooks {
  
  async create(book: IBook, count: number, uid: string) {
    const { name,description,image,userUid,price,category } = book
    const quantity = new __Quantity()  
    const _book = new Book({
      name,
      description,
      image,
      userUid,
      price,
      category,
      uid
    })
    await _book.save()
    await quantity.create(_book._id, count)

  }
  async getBooks() {
    const book = await Book.aggregate([ 
      {
        $project: {
          "_id": "$_id",
          "name": "$name",
          "description": "$description",
          "image": "$image",
          "price": "$price",
          "category": ["$category"],
          "bookId": { "$toString": "$_id" }
        }
      },
      {
        $lookup: {
          from: 'quantities',
          localField: "_id",
          foreignField: "bookId",
          as: 'quantities'
        }
      },
      {
        $unwind: "$category"
      },
      {
        $project: {
          "_id": 1,
          "name": 1,
          "description": 1,
          "image": 1,
          "price": 1,
          "category": 1,
          "quantity": "$quantities.count"
        }
      },
      {
        $unwind: "$quantity"
      }
    ])
    return book
  }


  async getBook(id: string){

    let _id = new mongoose.Types.ObjectId(id)

    const book = await Book.aggregate([
      {
        "$match": { "_id": _id } 
      },
      {
        "$lookup": {
          "from": "quantities",
          "localField": "_id",
          "foreignField": "bookId",
          "as": "quan"
        }
      },
      {
        "$unwind": "$quan"
      },
      {
        "$project": {
          "_id": "$_id",
          "name": "$name",
          "image": "$image",
          "category": "$category",
          "createdAt": "$createdAt",
          "updatedAt": "$updatedAt",
          "description": "$description",
          "quantity": "$quan.count"
        }
      }
    ])
    return book
  }

} 
