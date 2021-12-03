import { ISystemSetting } from "../src/core/types";

let port = process.env.PORT as any;

const parsePort = (): number => {
    if (!isNaN(port)) {
        return port;
    }
    return 3000;
}

export default {
    PORT: parsePort()
} as ISystemSetting;


