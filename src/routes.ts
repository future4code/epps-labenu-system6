import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { StudentController } from "./controllers/StudentController";
import { TeacherController } from "./controllers/TeacherController";
import {StudentAgeController} from "./controllers/StudentAgeController"

const router = Router();

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();
const studentAgeController = new StudentAgeController();

router.put("/create-class", classController.create);
router.put("/create-student", studentController.create);
router.put("/create-teacher", teacherController.create);
router.get("/student/:id", studentAgeController.show )

export { router };
