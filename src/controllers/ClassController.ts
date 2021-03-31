import { Request, Response } from "express";
import { changeClassModule } from "../models/changeClassModule";
import { insertClass } from "../models/insertClass";
import { checkDate, formatDate } from "../utilities/verifiers";

class ClassController {
  async create(req: Request, res: Response) {
    let errorCode: number = 404;
    try {
      const { name, start_date, end_date, module, type } = req.body;
      const checkingStartDate = checkDate(start_date);
      const checkingEndDate = checkDate(end_date);
      let editName = name;
      if (type === "Noturna") {
        editName = (name as string) + "-na-night";
      }
      if (!name || !module || !type) {
        errorCode = 422;
        throw new Error(
          "Preencha corretamente os campos de name, start_date, end_date, module e type!"
        );
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
        editName,
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

  async update(req: Request, res: Response) {
    let errorCode: number = 404;
    try {
      const { id, module } = req.body;
      if (!id || !module) {
        errorCode = 422;
        throw new Error(
          "Preencha os campos do ID da turma e o número do módulo(1 a 7) para realizar a alteração."
        );
      }
      (await changeClassModule(id, module)) as string;
      res
        .status(200)
        .send({ message: "O módulo da turma foi alterado com sucesso!" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { ClassController };
