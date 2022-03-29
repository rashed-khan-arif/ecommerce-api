import { Request, Response } from "express";
import { Student } from "../data/entity/student";
import { AppDataSource } from "../data/source/appDataSource";

export const get = (req: Request, res: Response) => {
    res.send("Student Enitity....");
};

export const getAll = async (req: Request, res: Response) => {
    let students: Student[] = await AppDataSource.getRepository(Student).find();
    res.send(students);
};

export const post = async (req: Request, res: Response) => {
    let studentId = 0//await service.saveStudent(req.body);
    res.send(`New Student Saved: ID-${studentId} `);
};
