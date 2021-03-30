import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { StudentController } from "./controllers/StudentController";
import { TeacherController } from "./controllers/TeacherController";

const router = Router();

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();

router.put("/create-class", classController.create);
router.put("/create-student", studentController.create);
router.put("/create-student", teacherController.create);

export { router };
