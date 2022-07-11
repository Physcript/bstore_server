export interface IBook {
  name: string,
  image: string,
  userUid: string,
  price: number,
  category: string[]
} 

export interface IBooks {
  create(book: IBook): void,
  getBooks(): void
}


