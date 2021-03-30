import { selectStudentAgeById } from "./../models/selectStudentAgeById";
import { Request, Response } from "express";

class StudentAgeController {
  async show(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id) {
        throw new Error("id não existe");
      }

      const result = await selectStudentAgeById(id);

      res.status(200).send({ message: "Idade do estudante é", result });
    } catch (error) {
      console.log(error);
      res.status(422).send(error.sqlMessage || error.message);
    }
  }
}

export { StudentAgeController };
