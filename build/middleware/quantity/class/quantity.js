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
exports.__Quantity = void 0;
const Quantity_1 = __importDefault(require("../../../model/Quantity"));
class __Quantity {
    create(bookId, count = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const quantity = new Quantity_1.default({
                bookId,
                count
            });
            yield quantity.save();
        });
    }
    get() { }
}
exports.__Quantity = __Quantity;
