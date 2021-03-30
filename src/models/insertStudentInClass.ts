import connection from "../database/connection";

export const insertStudentInClass = async (
  class_id: string,
  id:string
): Promise<any> => {
  try {
    await connection.raw(`
        UPDATE Student SET class_id = ${class_id} WHERE id = ${id}
    `).then((res)=>{console.log(res);
    });
  } catch (error) {
    console.log(error);

    throw new Error(error.message || error.sqlMessage);
  }
};
