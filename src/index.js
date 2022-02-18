const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

//criando um bd fake so para armazenar as informações colocadas
const custumers = [];

//criando uma conta
/*
* cpf - string
* name - string
* id - uuid - identificador unico universal
(yarn add uuid)
- statement - lançamentos da conta - array []
*/

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const id = uuidv4();

  custumers.push({
    cpf,
    name,
    id,
    statement: []
  });


  //nao precisamos retornar nenhuma info, entao so pra enviar uma msg q deu certo
  return response.status(201).send('deu bom');

});

app.listen(3030);
