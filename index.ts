import { App } from "./src/app"
import SystemSetting from "./settings/system"
import Message from "./src/utils/message"

let server = App();

server.listen(SystemSetting.PORT, () => {
    console.log(Message.application.listening);
})