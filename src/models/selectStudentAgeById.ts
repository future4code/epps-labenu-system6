import connection from "../database/connection";

export const selectStudentAgeById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT DATEDIFF(CURDATE(),birthdate)/365
        FROM Student
        WHERE id=${id}
    `);

    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
