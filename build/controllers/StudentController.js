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
exports.StudentController = void 0;
const insertStudent_1 = require("./../models/insertStudent");
class StudentController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let errorCode = 400;
            try {
                const { name, email, birthdate, hobby } = req.body;
                if (!name || !email || !birthdate || !hobby) {
                    errorCode = 422;
                    throw new Error("Preencha todas as informações necessarias para adicionar um estudante !");
                }
                yield insertStudent_1.insertStudent(name, email, birthdate, hobby);
                res.status(201).send({
                    message: `Estudante ${name} adicionado a turma !`,
                });
            }
            catch (error) {
                res.status(errorCode).send({ message: error.message });
            }
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=StudentController.js.map