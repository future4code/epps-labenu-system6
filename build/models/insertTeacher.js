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
exports.insertTeacher = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const insertTeacher = (name, email, birthdate, speciality) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default
            .insert({
            id: Date.now(),
            name,
            email,
            birthdate,
            speciality,
        })
            .into("Teacher");
    }
    catch (error) {
        console.log(error.message || error.sqlMessage);
        throw new Error(error.message || error.sqlMessage);
    }
});
exports.insertTeacher = insertTeacher;
//# sourceMappingURL=insertTeacher.js.map