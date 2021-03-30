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
exports.insertStudent = void 0;
const connection_1 = require("./../database/connection");
const insertStudent = (name, email, birthdate, hobby) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.connection
            .insert({
            id: Date.now(),
            name: name,
            email: email,
            birthdate: birthdate,
            hobby: hobby,
        })
            .into("Student");
    }
    catch (error) {
        console.log(error);
    }
});
exports.insertStudent = insertStudent;
//# sourceMappingURL=insertStudent.js.map