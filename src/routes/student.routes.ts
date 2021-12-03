import { IRoute } from "../core/types";
import * as Controller from "../controllers/student.controller";

const { get, getAll, post } = Controller;

const StudentRoutes: IRoute[] = [
    {
        method: "get",
        path: "/students",
        handler: getAll
    }, {
        method: "get",
        path: "/student",
        handler: get
    }, {
        method: "post",
        path: "/student",
        handler: post
    }
]

export default StudentRoutes;