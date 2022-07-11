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
exports.Validate = void 0;
const User_1 = __importDefault(require("../../../model/User"));
class Validate {
    constructor(error = {}) {
        this.error = error;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let d of Object.entries(user)) {
                if (d[1].trim() === '') {
                    this.error[d[0]] = `${d[0]} Require`;
                }
            }
            let _user = yield User_1.default.findOne({ email: user.Email });
            if (_user !== null) {
                this.error['Email'] = 'Email already exist';
            }
            if (user.Password.trim() !== user.ConfirmPassword.trim()) {
                this.error['Password'] = 'Password not match';
            }
            if (user.Password.includes(' ')) {
                this.error['Password'] = 'Invalid Password';
            }
            if (user.Password.trim().length < 5) {
                this.error['Password'] = 'Password is too short';
            }
            return this.error;
        });
    }
    login() { }
}
exports.Validate = Validate;
