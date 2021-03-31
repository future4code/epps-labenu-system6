import connection from "../database/connection";

export const removeStudentFromClass = async (id: string): Promise<any> => {
  try {
    await connection
      .raw(
        `
        UPDATE Student SET class_id = null WHERE id = "${id}"
    `
      )
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);

    throw new Error(error.message || error.sqlMessage);
  }
};
