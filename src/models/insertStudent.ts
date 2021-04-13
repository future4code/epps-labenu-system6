import { Student } from "../types/student";
import { connection } from "./../database/connection";

export const insertStudent = async (student: Student): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name: student.name,
        email: student.email,
        birthdate: student.birthdate,
        hobby: student.hobby,
      })
      .into("Student");
  } catch (error) {
    console.log(error);
  }
};
