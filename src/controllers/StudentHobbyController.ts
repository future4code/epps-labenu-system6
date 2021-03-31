import { selectStudentByHobby } from "./../models/selectStudentByHobby";
import { Request, Response } from "express";

class StudentHobbyController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const hobby = req.query.hobby as string;

      if (!hobby) {
        errorCode = 404;
        throw new Error("Por favor digite um hobby!");
      }
      const result = await selectStudentByHobby(hobby);
      if (!result.length) {
        errorCode = 404;
        throw new Error("Não existe nenhum estudante relacionado a este hobby!");
      }
      res.status(200).send({ message: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { StudentHobbyController };
