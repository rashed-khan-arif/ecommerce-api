import "reflect-metadata";
import { App } from "./src/app"
import SystemSetting from "./settings/system"
import Message from "./src/utils/message"
import { AppDataSource } from "./src/data/source/appDataSource";

let server = App();

AppDataSource.initialize()
    .then(() => {
        console.log("Database Connection Stablished!")
        server.listen(SystemSetting.PORT, () => {
            console.log(Message.application.listening + SystemSetting.PORT);
        })
    })
    .catch((err) => {
        console.log(err)
    });

