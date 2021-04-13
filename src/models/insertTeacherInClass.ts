import connection from "../database/connection";

export const insertTeacherInClass = async (
  class_id: string,
  id: string
): Promise<any> => {
  try {
    await connection.raw(`
        UPDATE Teacher SET class_id = ${class_id} WHERE id = ${id}
    `);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
