import connection from "../database/connection";

export const insertTeacher = async (
  name: string,
  email: string,
  birthdate: string,
  speciality: string
): Promise<any> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name,
        email,
        birthdate,
        speciality,
      })
      .into("Teacher");
  } catch (error) {
    console.log(error.message || error.sqlMessage)
    throw new Error(error.message || error.sqlMessage);
  }
};
