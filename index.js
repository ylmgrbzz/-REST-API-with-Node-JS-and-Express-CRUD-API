import users from '../restAPI/routes/users.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use('/users', users);
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Listening on port ${port}`));




