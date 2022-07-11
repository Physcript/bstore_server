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
exports.authenticate = void 0;
const class_1 = require("../class");
function authenticate(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const token = (_a = req.headers.token) !== null && _a !== void 0 ? _a : '';
        const uid = (_b = req.body.uid) !== null && _b !== void 0 ? _b : '';
        let user;
        const __auth = new class_1.__Auth();
        if (token !== '') {
            user = yield __auth.token(`${token}`);
        }
        else {
            user = yield __auth.uid(uid);
        }
        if (!user) {
            res.status(401).json({
                error: 'UnAuthorized'
            });
            return;
        }
        user.password = '';
        res.locals.user = user;
        next();
    });
}
exports.authenticate = authenticate;
