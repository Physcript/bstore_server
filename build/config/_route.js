"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../route/user"));
const book_1 = __importDefault(require("../route/book"));
module.exports = (app) => {
    app.use('/api/u/', user_1.default);
    app.use('/api/b/', book_1.default);
    app.use((req, res) => {
        res.status(404).json({
            error: 'Not found'
        });
    });
    return;
};
