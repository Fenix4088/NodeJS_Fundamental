import Application from './src/framework/Application';
import UserRouter from './src/app_by_framework/user-router'
import { parseJson } from './src/app_by_framework/parseJSON';


const PORT = process.env.PORT || 8080
//! Create app
const app = new Application();

app.use(parseJson)
app.addRouter(UserRouter);

app.listen(PORT, () => {});
