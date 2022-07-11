"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        lowercase: true
    },
    image: {
        type: String,
    },
    userUID: {
        type: String,
        ref: 'User'
    },
    price: {
        type: Number,
    },
    category: [{
            type: String
        }],
}, { timestamps: true });
const Book = mongoose_1.default.model('Book', bookSchema);
exports.default = Book;
