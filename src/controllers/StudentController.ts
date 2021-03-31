import { removeStudentFromClass } from "./../models/removeStudentFromClass";
import { formatDate } from "./../utilities/verifiers";
import { insertStudent } from "./../models/insertStudent";
import { Request, Response } from "express";
import { checkDate } from "../utilities/verifiers";
import { selectStudentAgeById } from "../models/selectStudentAgeById";
import { insertStudentInClass } from "../models/insertStudentInClass";

class StudentController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { name, email, birthdate, hobby } = req.body;

      if (!name || !email || !birthdate || !hobby) {
        errorCode = 422;
        throw new Error(
          "Preencha todas as informações necessarias para adicionar um estudante !"
        );
      }

      const checkingDate = checkDate(birthdate);
      if (!checkingDate) {
        errorCode = 406;
        throw new Error("Coloque uma data formato DD/MM/YYYY");
      }
      const formatingDate = formatDate(birthdate);
      await insertStudent(name, email, formatingDate, hobby);
      res.status(201).send({
        message: `Estudante ${name} adicionado a turma!`,
      });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { class_id, student_id } = req.body;
      if (!class_id || !student_id) {
        errorCode = 422;
        throw new Error("Preencha os campos do ID da class e do ID do aluno!");
      }
      await insertStudentInClass(class_id, student_id);
      res.status(200).send({ message: "O aluno foi inserido na turma" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      if (!id) {
        errorCode = 422;
        throw new Error("Id não existe!");
      }
      const result = (await selectStudentAgeById(id)) as string;
      res.status(200).send({ message: result });
    } catch (error) {
      console.log(error);
      res.status(errorCode).send({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      if (!id) {
        errorCode = 422;
        throw new Error("Informe o ID do estudante!");
      }
      await removeStudentFromClass(id);
      res.status(200).send({ message: "O aluno foi removido na turma" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { StudentController };
