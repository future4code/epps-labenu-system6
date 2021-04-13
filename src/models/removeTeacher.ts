import connection from "../database/connection";

export const removeTeacher = async (id: string): Promise<void> => {
  try {
    await connection.raw(`
            UPDATE Teacher SET class_id=null WHERE id="${id}"
        `);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
