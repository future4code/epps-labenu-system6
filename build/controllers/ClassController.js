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
exports.ClassController = void 0;
const insertClass_1 = require("../models/insertClass");
class ClassController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let errorCode = 404;
            try {
                const { name, start_date, end_date, module, type } = req.body;
                (yield insertClass_1.insertClass(name, start_date, end_date, module, type));
                res.status(201).send({ message: "Turma criada com sucesso." });
            }
            catch (error) {
                res.status(errorCode).send({ message: error.message });
            }
        });
    }
}
exports.ClassController = ClassController;
//# sourceMappingURL=ClassController.js.map