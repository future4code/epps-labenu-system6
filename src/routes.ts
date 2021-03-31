import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { StudentController } from "./controllers/StudentController";
import { TeacherController } from "./controllers/TeacherController";
import { GetClassInfoController } from "./controllers/GetClassInfoController";
import { StudentHobbyController } from "./controllers/StudentHobbyController";
const router = Router();

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();
const getClassInfoController = new GetClassInfoController();
const studentHobbyController = new StudentHobbyController();

router.put("/create-class", classController.create);

router.put("/create-student", studentController.create);
router.get("/students/:id", studentController.show);
router.post("/teacher-class", teacherController.execute);
router.post("/students-class", studentController.execute);
router.get("/students/class/:id", getClassInfoController.show);
router.get("/students", studentHobbyController.show);

router.put("/teacher/create", teacherController.create);
router.post("/teacher/class", teacherController.execute);
router.get("/teacher/class/:id", teacherController.show);
router.delete("/teacher/class/delete/:id", teacherController.update);

export { router };
