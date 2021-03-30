"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const createTables = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.raw(`
    CREATE TABLE Class(
        id VARCHAR(255) PRIMARY KEY NOT NULL, 
        name VARCHAR(50) NOT NULL, 
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        module ENUM ('1', '2', '3', '4', '5', '6', '7', '0') DEFAULT "0",
        type ENUM ("full-time class", "-na-night")
        );
      `);
        yield connection_1.default.raw(`
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
        yield connection_1.default.raw(`
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
        connection_1.default.destroy();
    }
    catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
});
createTables();
//# sourceMappingURL=createTables.js.map