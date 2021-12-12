import Router from '../framework/Router';

const router = new Router();

const users = [
  { id: 1, name: 'Joe' },
  { id: 2, name: 'Nick' },
];

router.get('/users', (req, res) => {
  //@ts-ignore
  res.send(users);
});

router.get('/posts', (req, res) => {
      debugger;
  //@ts-ignore
  res.send(users);
});

export default router;
