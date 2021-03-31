import { Request, Response } from "express";
import { insertTeacher } from "../models/insertTeacher";
import { insertTeacherInClass } from "../models/insertTeacherInClass";
import { removeTeacher } from "../models/removeTeacher";
import { selectTeachersFromClass } from "../models/selectTeachersFromClass";
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

  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { class_id, teacher_id } = req.body;
      if (!class_id || !teacher_id) {
        errorCode = 422;
        throw new Error(
          "Preencha os campos do ID da class e do ID do docente para prosseguir."
        );
      }
      (await insertTeacherInClass(class_id, teacher_id)) as string;
      res.status(200).send({ message: "O professor foi inserido na turma" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      if (!id) {
        errorCode = 404;
        throw new Error("Insira um ID válido.");
      }
      const result = await selectTeachersFromClass(id);
      if (!result.length) {
        errorCode = 404;
        throw new Error("Nenhum docente está na turma!");
      }
      res.status(200).send({ message: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      if (!id) {
        errorCode = 404;
        throw new Error(
          "Insira um ID válido para a exclusão do professor da turma."
        );
      }
      await removeTeacher(id);
      res.status(200).send({ message: "O professor for removido da turma." });
    } catch (error) {
      res.status(error).send({ message: error.message });
    }
  }
}

export { TeacherController };
