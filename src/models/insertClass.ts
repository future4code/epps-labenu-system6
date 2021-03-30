import connection from "../database/connection";

export const insertClass = async (
  name: string,
  start_date: string,
  end_date: string,
  module: string,
  type: string
): Promise<any> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name,
        start_date,
        end_date,
        module,
        type,
      })
      .into("Class");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
