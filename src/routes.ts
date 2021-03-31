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
router.get("/student/:id", studentController.show);
router.post("/student-class", studentController.execute);

router.put("/teacher/create", teacherController.create);
router.post("/teacher/class", teacherController.execute);
router.get("/teacher/class/:id", teacherController.show);

export { router };
