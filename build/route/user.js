"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controller/user"));
const create_1 = require("../middleware/user/functions/create");
const login_1 = require("../middleware/user/functions/login");
const logout_1 = require("../middleware/user/functions/logout");
const authenticate_1 = require("../middleware/user/auth/function/authenticate");
const router = express_1.default.Router();
router.post('/create', create_1.create, user_1.default.create);
router.post('/login', login_1.login, user_1.default.login);
router.post('/auth', authenticate_1.authenticate, user_1.default.authenticate);
router.post('/logout', logout_1.logout, user_1.default.logout);
exports.default = router;
