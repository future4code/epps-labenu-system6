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
exports.TeacherController = void 0;
const insertTeacher_1 = require("../models/insertTeacher");
class TeacherController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let errorCode = 400;
            try {
                const { name, email, birthdate, speciality } = req.body;
                if (!name || !email || !birthdate || speciality) {
                    errorCode = 422;
                    throw new Error("Por favor preencha todas informações, nome, email, data de nascimento e especialidade.");
                }
                (yield insertTeacher_1.insertTeacher(name, email, birthdate, speciality));
                res.status(201).send({ message: "Docente criado com sucesso." });
            }
            catch (error) {
                res.status(errorCode).send({ message: error.message });
            }
        });
    }
}
exports.TeacherController = TeacherController;
//# sourceMappingURL=TeacherController.js.map