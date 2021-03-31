import connection from "../database/connection";

export const deleteStudent = async (id: string): Promise<any> => {
  try {
    await connection.delete().from("Student").where({ id });
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
