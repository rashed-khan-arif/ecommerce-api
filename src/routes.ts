import * as express from "express";
import { Request, Response, Router } from "express";
import { IRoute } from "./core/types";
import StudentRoutes from "./routes/student.routes"

export const routes: Array<IRoute> = [
    ...StudentRoutes
]

let router: Router = express.Router();

routes.forEach((route: IRoute) => {
    (router as any)[route.method](route.path, route.handler);
})

export default router;