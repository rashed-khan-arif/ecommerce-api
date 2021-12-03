import { Request, Response } from "express";


export const get = (req: Request, res: Response) => {
    res.send("Student Enitity....");
};

export const getAll = async (req: Request, res: Response) => {
    let students: [] = []//await service.getAllStudents();
    res.send(students);
};

export const post = async (req: Request, res: Response) => {
    let studentId = 0//await service.saveStudent(req.body);
    res.send(`New Student Saved: ID-${studentId} `);
};
