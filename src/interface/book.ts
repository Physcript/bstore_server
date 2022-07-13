export interface IBook {
  name: string,
  image: string,
  userUid: string,
  price: number,
  category: string[]
} 

export interface IBooks {
  create(book: IBook, count: number, uid: string): Promise<void>,
  getBooks(): Promise<any>
}


