"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    books: ((req, res) => {
        res.status(200).json({
            books: res.locals.books
        });
        return;
    }),
    book: ((req, res) => {
        res.status(200).json({
            book: res.locals.book
        });
        return;
    }),
    create: ((req, res) => {
        res.status(200).json({
            message: 'created books'
        });
        return;
    })
};
