"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    books: ((req, res) => {
        res.status(200).json({
            message: {
                books: 'this is a book'
            }
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
