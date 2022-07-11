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
exports.create = void 0;
const books_1 = require("../class/books");
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, image, userUid, price, category, count } = req.body;
        const books = new books_1.__Books();
        const _book = { name, image, userUid, price, category };
        yield books.create(_book, count);
        next();
        return;
    });
}
exports.create = create;
