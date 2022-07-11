"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("../controller/product"));
const create_1 = require("../middleware/book/function/create");
const authenticate_1 = require("../middleware/user/auth/function/authenticate");
const router = express_1.default.Router();
router.get('/book', product_1.default.books);
router.post('/book', authenticate_1.authenticate, create_1.create, product_1.default.create);
exports.default = router;
