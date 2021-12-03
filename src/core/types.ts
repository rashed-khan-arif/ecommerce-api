import { Request, Response } from "express";

export type RouteHandler = (req: Request, res: Response) => void;

export interface IRoute {
    method: string;
    path: string;
    handler: RouteHandler;
}

export interface ISystemSetting {
    PORT: number;
}
