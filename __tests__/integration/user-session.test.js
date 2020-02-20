const request = require("supertest");
const app = require("../../src/server");
const Usuario = require('../../src/models/Usuario');
const Tecnico = require('../../src/models/Tecnico');
const Proprietario = require('../../src/models/Proprietario');
const connection = require('../../src/database/index');

describe("Cadastrar novos usuários", () => {
  beforeAll(() => {
    Usuario.init(connection);
    Tecnico.init(connection);
    Proprietario.init(connection);
  });

  beforeEach(async () => {
    await Usuario.destroy({ truncate: true, force: true, cascade: true });
    await Tecnico.destroy({ truncate: true, force: true, cascade: true });
    await Proprietario.destroy({truncate: true, force: true, cascade: true});
  });

  test("Cadastra técnico pela rota", async () => {
    const response = await request(app)
      .post("/user")
      .send({
        nome: "Marco",
        email: "marco@iapar.com",
        senha: "123456",
        cpf: "123-457-157/54",
        cidade: "Dois Vizinhos",
        rua: "Wenceslau",
        numero: "166",
        bairro: "Torres",
        cep: "85660-000",
        telefone: "(51)99999-9999",
        tipo_usuario: "tecnico",
        ano_formatura: "2020",
        tipo_registro: "CREA",
        registro_profissional: "123456"
      });
    expect(response.body.resposta).toBe('Cadastro realizado com sucesso.');
  });

  test("Cadastra proprietario pela rota", async () => {
    const response = await request(app)
      .post("/user")
      .send({
        nome: "Marco",
        email: "marco@iapar.com",
        senha: "123456",
        cpf: "123-457-157/54",
        cidade: "Dois Vizinhos",
        rua: "Wenceslau",
        numero: "166",
        bairro: "Torres",
        cep: "85660-000",
        telefone: "(51)99999-9999",
        tipo_usuario: "proprietario",
        cnpj: "Não possuo."
      });
    expect(response.body.resposta).toBe('Cadastro realizado com sucesso.');
  });

 /*  it('Retornar todos os proprietários cadastrados', async done => {
    const response = await request(app).get('/user');
    expect(response.body).toContainEqual([]);
  }); */



  afterAll(() => {
    connection.destroy();
  });

});
