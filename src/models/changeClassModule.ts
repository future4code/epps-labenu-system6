import connection from "../database/connection";

export const changeClassModule = async (
  id: string,
  module: string
): Promise<any> => {
  try {
    await connection.raw(`UPDATE Class SET module=${module} WHERE id=${id}`);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
