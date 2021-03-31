import connection from "../database/connection";

export const selectStudentByHobby = async (hobby: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT hobby, id, name  
        FROM Student
        WHERE hobby = '${hobby}'
        GROUP BY hobby, id, name;
        `);

    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
