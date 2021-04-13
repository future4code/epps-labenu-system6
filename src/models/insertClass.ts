import connection from "../database/connection";
import { ClassInfo } from "../types/class";

export const insertClass = async (classInfo: ClassInfo): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name: classInfo.name,
        start_date: classInfo.start_date,
        end_date: classInfo.end_date,
        module: classInfo.module,
        type: classInfo.module,
      })
      .into("Class");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
