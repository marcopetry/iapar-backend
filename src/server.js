const express = require('express');
const routes = require('./routes/users-route');
const controller = require('./controllers/users-controllers');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/*
{
  "nome": 'Marco',
  "email": "marco@marco.com",
  "senha": "123456",
  "cpf": "12346587",
  "cidade": "Dois Vizinhos",
  "rua": "Wenceslau",
  "numero": "166",
  "bairro": "Torres",
  "cep": "85660-000",
  "telefone": "99999999",
}
*/