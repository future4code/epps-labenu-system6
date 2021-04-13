import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { StudentController } from "./controllers/StudentController";
import { TeacherController } from "./controllers/TeacherController";
import { ClassInfoController } from "./controllers/ClassInfoController";
import { StudentHobbyController } from "./controllers/StudentHobbyController";

const router = Router();

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();
const classInfoController = new ClassInfoController();
const studentHobbyController = new StudentHobbyController();

router.put("/class/create", classController.create);
router.post("/class/update", classController.update);

router.put("/student/create", studentController.create);
router.get("/students/:id", studentController.show);
router.post("/students/class", studentController.execute);
router.get("/students/class/:id", classInfoController.show);
router.get("/students", studentHobbyController.show);
router.delete("/students/remove-class/:id", studentController.update);
router.delete("/students/remove-student/:id", studentController.delete);

router.put("/teacher/create", teacherController.create);
router.post("/teacher/class", teacherController.execute);
router.get("/teacher/class/:id", teacherController.show);
router.delete("/teacher/class/remove/:id", teacherController.update);

export { router };
