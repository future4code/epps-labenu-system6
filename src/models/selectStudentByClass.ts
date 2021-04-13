import connection from "../database/connection";

export const selectStudentByClass = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT Student.name as Student,Student.hobby as Hobby, Class.name
        as Class FROM Student LEFT JOIN Class on Student.class_id = Class.id
        WHERE Student.class_id = "${id}"
    `);

    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
