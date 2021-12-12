import Router from './src/framework/Router';
import Application from './src/framework/Application';


const PORT = process.env.PORT || 8080;

//! Create app
const app = new Application();

// ! Create router
const router = new Router();

router.get('/users', (req, res) => {
  res.end('Request to /users');
});

router.get('/posts', (req, res) => {
  res.end('Request to /posts');
});

app.addRouter(router);

app.listen(PORT, () => {});
