import { Request, Response } from "express";
import { insertTeacher } from "../models/insertTeacher";
import { checkDate, formatDate } from "../utilities/verifiers";

class TeacherController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { name, email, birthdate, speciality } = req.body;
      const checkingDate = checkDate(birthdate);
      if (!name || !email || !birthdate || !speciality) {
        errorCode = 422;
        throw new Error(
          "Por favor preencha todas as informações, nome, email, data de nascimento e especialidade."
        );
      }
      if (!checkingDate) {
        errorCode = 406;
        throw new Error("Coloque uma data formato DD/MM/YYYY");
      }
      const formatingDate = formatDate(birthdate);
      await insertTeacher(name, email, formatingDate, speciality);
      res.status(201).send({ message: "Docente criado com sucesso." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { TeacherController };
