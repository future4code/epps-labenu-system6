import { Request, Response } from "express";
import { selectStudentByClass } from "../models/selectStudentByClass";

class GetClassInfoController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      if (!id) {
        errorCode = 404;
        throw new Error("Insira um ID válido.");
      }
      const result = await selectStudentByClass(id);
      if (!result.length) {
        errorCode = 404;
        throw new Error("Nenhum docente está na turma!");
      }
      res.status(200).send({ message: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetClassInfoController };
