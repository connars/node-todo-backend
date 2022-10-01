import express from 'express';
import { knexdb } from './connection.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3031;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', async (request, response) => {
    const data = await knexdb.select('id').from('users');
    response.json({ info: 'Node.js, Express, and Postgres API' , data });
});

app.post('/registration', async (request, response) => {
    const body = request.body;
    const data = await knexdb.select('id').from('users');
    response.json({ info: 'Node.js, Express, and Postgres API' , data , body});
}
  );


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

