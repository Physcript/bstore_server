import mongoose from 'mongoose'
import Quantiy from '../../../model/Quantity'

interface IQuantity {
  create(bookId: mongoose.Types.ObjectId,count: number): void
  get(): void
}

export class __Quantity implements IQuantity{

  async create(bookId: mongoose.Types.ObjectId, count: number = 0 ) {
    const quantity = new Quantiy({
      bookId,
      count
    })
    await quantity.save()
  }
  get() {}
}
