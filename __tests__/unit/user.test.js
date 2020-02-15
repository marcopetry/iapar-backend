const Usuario = require('../../src/models/Usuario');
const Tecnico = require('../../src/models/Tecnico');
const Proprietario = require('../../src/models/Proprietario');
const connection = require('../../src/database/index');

describe('Usuario', () => {
    beforeAll(() => {
        Usuario.init(connection);
        Tecnico.init(connection);
        Proprietario.init(connection);
    });

    beforeEach(async (done) => {
        await Usuario.destroy({ truncate: true, force: true });
        await Tecnico.destroy({ truncate: true, force: true });
        await Proprietario.destroy({ truncate: true, force: true });
        done();
    });

    it('Deverá cadastrar novo técnico', async (done) => {
        const user = await Usuario.create({
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
        expect(user).not.toBeNull();
        done();
    });

    it('Deverá cadastrar novo Proprietário', async done => {
        const user = await Usuario.create({
            "nome": "Marco",
            "email": "marco@proprietario.com",
            "senha": "123456",
            "cpf": "123-457-157/54",
            "cidade": "Dois Vizinhos",
            "rua": "Wenceslau",
            "numero": "166",
            "bairro": "Torres",
            "cep": "85660-000",
            "telefone": "(51)99999-9999",
            "tipo_usuario": "proprietario",
        });

        const proprietario = await Proprietario.create({
            id: user.id,
            cnpj: '123456'
        });

        expect(proprietario.id).toBe(user.id);
        done();
    });

    afterAll((done) => {
        connection.destroy();
        done();
    });

});