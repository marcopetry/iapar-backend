const request = require("supertest");

const app = require("../../src/server");

describe("Authentication", () => {

  it("should authenticate with valid credentials", async done => {   
    const response = await request(app)
      .post("/user")
      .send({
          "nome": "Marco",
          "email": "marco@iapar.com",
          "senha": "123456",
          "cpf": "123-457-157/54",
          "cidade": "Dois Vizinhos",
          "rua": "Wenceslau",
          "numero": "166",
          "bairro": "Torres",
          "cep": "85660-000",
          "telefone": "(51)99999-9999", 
          "tipo_usuario": "tecnico", 
          "ano_formatura": "2020",
          "tipo_registro": "CREA", 
          "registro_profissional": "123456"
      });

    expect(response.status).toBe(200);
    done();
  });

});
