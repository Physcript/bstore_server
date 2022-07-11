"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const books_1 = require("../class/books");
function create(req, res, next) {
    const { name, image, userUid, price, category } = req.body;
    const books = new books_1.__Books();
    const _book = { name, image, userUid, price, category };
    books.create(_book);
    console.log(_book);
    console.log(res.locals.user);
    next();
    return;
}
exports.create = create;
