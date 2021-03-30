import connection from "../database/connection";

export const selectStudentAgeById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT name, FLOOR( DATEDIFF(CURDATE(),birthdate)/365) as Age
        FROM Student
        WHERE id=${id}
    `);

    return result[0][0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
