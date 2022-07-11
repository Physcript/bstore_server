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
exports.__User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../../../model/User"));
const validate_1 = require("../validate");
const create_1 = require("../functions/create");
class _User {
}
class __User extends _User {
    constructor() {
        super();
        this.validate = new validate_1.Validate();
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const error = yield this.validate.create(user);
            if (Object.keys(error).length >= 1) {
                return error;
            }
            const _uid = yield (0, create_1.uid)();
            const encrypt = yield bcrypt_1.default.hash(user.Password, 8);
            const data = new User_1.default({
                firstName: user.Firstname,
                lastName: user.Lastname,
                email: user.Email,
                password: encrypt,
                uid: _uid,
            });
            yield data.save();
            return;
        });
    }
    login() { }
    logout() { }
    find() { }
}
exports.__User = __User;
