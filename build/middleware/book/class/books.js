"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__Books = void 0;
const Book_1 = __importDefault(require("../../../model/Book"));
class __Books {
    create(book) {
        const { name, image, userUid, price, category } = book;
        const _book = new Book_1.default({
            name,
            image,
            userUid,
            price,
            category
        });
    }
    getBooks() { }
}
exports.__Books = __Books;
