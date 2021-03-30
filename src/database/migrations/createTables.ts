import connection from "../connection";

const createTables = async (): Promise<void> => {
  try {
    await connection.raw(`
    CREATE TABLE Class(
        id VARCHAR(255) PRIMARY KEY NOT NULL, 
        name VARCHAR(50) NOT NULL, 
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        module ENUM ('1', '2', '3', '4', '5', '6', '7', '0') DEFAULT "0",
        type ENUM ("full-time class", "-na-night")
        );
      `);
    await connection.raw(`
      CREATE TABLE Teacher(
        id VARCHAR(255) PRIMARY KEY NOT NULL, 
        name VARCHAR(50) NOT NULL, 
        email VARCHAR(50) NOT NULL UNIQUE,
        birthdate DATE NOT NULL,
        speciality ENUM ("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"),
        class_id VARCHAR(255) NULL,
        FOREIGN KEY (class_id) REFERENCES Class(id)
      );
      `);
    await connection.raw(`
    CREATE TABLE Student(
        id VARCHAR(255) PRIMARY KEY NOT NULL, 
        name VARCHAR(50) NOT NULL, 
        email VARCHAR(50) NOT NULL UNIQUE, 
        birthdate DATE NOT NULL,
        hobby VARCHAR(50) NULL,
        class_id VARCHAR(255) NULL,
        FOREIGN KEY (class_id) REFERENCES Class(id)
        );
        `);
    console.log("Tabelas criadas.");
    connection.destroy();
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};

createTables();
