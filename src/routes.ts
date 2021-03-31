import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { StudentController } from "./controllers/StudentController";
import { TeacherController } from "./controllers/TeacherController";
import { GetClassInfoController } from "./controllers/GetClassInfoController";

const router = Router();

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();
const getClassInfoController = new GetClassInfoController();

router.put("/create-class", classController.create);
router.put("/create-student", studentController.create);
router.put("/create-teacher", teacherController.create);
router.get("/students/:id", studentController.show);
router.post("/teacher-class", teacherController.execute);
router.post("/students-class", studentController.execute);
router.get("/students/class/:id", getClassInfoController.show);

export { router };
