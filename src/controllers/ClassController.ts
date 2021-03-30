import { Request, Response } from "express";
import { insertClass } from "../models/insertClass";

class ClassController {
  async create(req: Request, res: Response) {
    let errorCode: number = 404;
    try {
      const { name, start_date, end_date, module, type } = req.body;
      (await insertClass(name, start_date, end_date, module, type)) as string;
      res.status(201).send({ message: "Turma criada com sucesso." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { ClassController };
