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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const books_1 = require("../class/books");
function getOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        let _objectId = require('mongodb').ObjectId;
        if (!_objectId.isValid(id)) {
            res.status(401).json({
                message: 'Invalid action'
            });
            return;
        }
        const book = new books_1.__Books();
        let _book = yield book.getBook(id);
        res.locals.book = _book[0];
        next();
        return;
    });
}
exports.getOne = getOne;
