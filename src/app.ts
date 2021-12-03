import express, { CookieOptions } from "express";
import { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

export const App = () => {
    let app: Application = express();
  
    app.use(cors({ origin: "*" }));
    app.use(cookieParser());
    app.use(express.static('public'))
    app.use(compression({ filter: shouldCompress }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use("/api", router);
    app.use("/", rootRouteHandler);
    app.use(routeErrorHandler);

    return app;
}

const rootRouteHandler = (req: Request, res: Response, next: NextFunction) => {
    return res.send(`Express Server Running with typescript \n ${req.method} \n ${new Date()}`);
};

const routeErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err)
    res.status(500)
    res.send(`Error Occurred! ${err.message}`)
};

const shouldCompress = (req: Request, res: Response) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
}