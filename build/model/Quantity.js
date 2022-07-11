"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const quantitySchema = new mongoose_1.default.Schema({
    bookId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Book'
    },
    count: {
        type: Number
    }
});
const Quantity = mongoose_1.default.model('Quantity', quantitySchema);
exports.default = Quantity;
