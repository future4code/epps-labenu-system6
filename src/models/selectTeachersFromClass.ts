import connection from "../database/connection";

export const selectTeachersFromClass = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT Teacher.name
        as Teacher,Teacher.speciality
        as Speciality, Class.name
        as Class FROM Teacher
        LEFT JOIN Class on Teacher.class_id = Class.id
        WHERE Teacher.class_id = "${id}"
    `);
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
