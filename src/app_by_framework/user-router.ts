import Router from '../framework/Router';

const router = new Router();

const users = [
  { id: 1, name: 'Joe' },
  { id: 2, name: 'Nick' },
];

router.get('/users', (req, res) => {
  //@ts-ignore
  if(req.param.id) {
        //@ts-ignore
        return res.send(users.find(user => user.id == req.params.id))
  }

  //@ts-ignore
  res.send(users);
});

router.post('/users', (req, res) => {
  //@ts-ignore
  users.push(req.body);

  //@ts-ignore
  res.send(users);
});

export default router;
