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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const search_1 = require("./search");
const validate_1 = require("../validate");
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield (0, search_1.byEmail)(email);
        if (user === null) {
            res.status(400).json({
                message: 'Invalid email/password'
            });
            return;
        }
        const validate = new validate_1.Validate();
        const isMatch = yield validate.login(password, user.password);
        if (isMatch === false) {
            res.status(400).json({
                message: 'Invalid email/password'
            });
            return;
        }
        let __user = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            uid: user.uid,
        };
        const token = jsonwebtoken_1.default.sign(__user, `${config_1.default.private.login}`);
        user.token = token;
        yield user.save();
        res.locals.user = user;
        res.locals.token = token;
        next();
        return;
    });
}
exports.login = login;
