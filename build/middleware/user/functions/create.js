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
exports.uid = exports.create = void 0;
const user_1 = require("../class/user");
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        const user = new user_1.__User();
        const error = yield user.create({ Firstname: firstName, Lastname: lastName, Email: email, Password: password, ConfirmPassword: confirmPassword });
        if (error) {
            res.status(400).json({
                error: error
            });
            return;
        }
        next();
        return;
    });
}
exports.create = create;
function uid() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield Date.now().toString(36)) + Math.random().toString(36).substr(2);
    });
}
exports.uid = uid;
