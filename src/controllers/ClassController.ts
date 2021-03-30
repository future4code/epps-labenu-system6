import { Request, Response } from "express";
import { insertClass } from "../models/insertClass";
import { checkDate, formatDate } from "../utilities/verifiers";

class ClassController {
  async create(req: Request, res: Response) {
    let errorCode: number = 404;
    try {
      const { name, start_date, end_date, module, type } = req.body;
      const checkingStartDate = checkDate(start_date);
      const checkingEndDate = checkDate(end_date);
      if (!name || !module || !type) {
        errorCode = 422;
        throw new Error("Preencha corretamente os campos para a criação!");
      }
      if (!checkingStartDate) {
        errorCode = 406;
        throw new Error("Coloque a data de inicio no formato DD/MM/YYYY");
      }
      if (!checkingEndDate) {
        errorCode = 406;
        throw new Error("Coloque a data final no formato DD/MM/YYYY");
      }
      const convertStartDate = formatDate(start_date);
      const convertEndDate = formatDate(end_date);
      (await insertClass(
        name,
        convertStartDate,
        convertEndDate,
        module,
        type
      )) as string;
      res.status(201).send({ message: "Turma criada com sucesso." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { ClassController };
