"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__Books = void 0;
const Book_1 = __importDefault(require("../../../model/Book"));
const quantity_1 = require("../../quantity/class/quantity");
class __Books {
    create(book, count, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, image, userUid, price, category } = book;
            const quantity = new quantity_1.__Quantity();
            const _book = new Book_1.default({
                name,
                image,
                userUid,
                price,
                category,
                uid
            });
            yield _book.save();
            yield quantity.create(_book._id, count);
        });
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield Book_1.default.aggregate([
                {
                    $project: {
                        "_id": "$_id",
                        "name": "$name",
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
                        "image": 1,
                        "price": 1,
                        "category": 1,
                        "quantity": "$quantities.count"
                    }
                },
                {
                    $unwind: "$quantity"
                }
            ]);
            return book;
        });
    }
}
exports.__Books = __Books;
