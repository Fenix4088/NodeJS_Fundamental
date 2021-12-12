import Application from './src/framework/Application';
import UserRouter from './src/app_by_framework/user-router';
import { parseJson } from './src/framework/parseJSON';
import { parseUrl } from './src/framework/parseUrl';

const PORT = process.env.PORT || 8080;
//! Create app
const app = new Application();

app.use(parseJson);
app.use(parseUrl('http://localhost:8080'));
app.addRouter(UserRouter);

app.listen(PORT, () => {});
