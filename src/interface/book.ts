export interface IBook {
  name: string,
  description: string,
  image: string,
  userUid: string,
  price: number,
  category: string[]
} 

export interface IBooks {
  create(book: IBook, count: number, uid: string): Promise<void>,
  getBooks(): Promise<any>
  getBook(id: string): Promise<any>
}


