import { connection } from "./../database/connection";
export const insertStudent = async (
  name: string,
  email: string,
  birthdate: string,
  hobby: string
): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name: name,
        email: email,
        birthdate: birthdate,
        hobby: hobby,
      })
      .into("Student");
  } catch (error) {
    console.log(error);
  }
};
