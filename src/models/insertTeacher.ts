import connection from "../database/connection";
import { Teacher } from "../types/teacher";

export const insertTeacher = async (teacher: Teacher): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name: teacher.name,
        email: teacher.email,
        birthdate: teacher.birthdate,
        speciality: teacher.speciality,
      })
      .into("Teacher");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
