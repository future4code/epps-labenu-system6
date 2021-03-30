"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ClassController_1 = require("./controllers/ClassController");
const StudentController_1 = require("./controllers/StudentController");
const TeacherController_1 = require("./controllers/TeacherController");
const router = express_1.Router();
exports.router = router;
const classController = new ClassController_1.ClassController();
const studentController = new StudentController_1.StudentController();
const teacherController = new TeacherController_1.TeacherController();
router.put("/create-class", classController.create);
router.put("/create-student", studentController.create);
router.put("/create-student", teacherController.create);
//# sourceMappingURL=routes.js.map