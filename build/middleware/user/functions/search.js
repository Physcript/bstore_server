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
exports.byEmail = exports.byToken = exports.byUid = void 0;
const User_1 = __importDefault(require("../../../model/User"));
function byUid(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ uid });
        return user;
    });
}
exports.byUid = byUid;
function byToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ token });
        return user;
    });
}
exports.byToken = byToken;
function byEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ email });
        return user;
    });
}
exports.byEmail = byEmail;
