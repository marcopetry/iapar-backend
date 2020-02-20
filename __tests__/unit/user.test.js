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

    beforeEach(async () => {
        await Usuario.destroy({ truncate: true, force: true, cascade: true });
        await Tecnico.destroy({ truncate: true, force: true, cascade: true });
        await Proprietario.destroy({ truncate: true, force: true, cascade: true });
    });

    test('Deverá cadastrar novo técnico', async () => {
        const user = await Usuario.create({
            nome: "Marco",
            email: "marco@proprietario.com",
            senha: "123456",
            cpf: "123-457-157/54",
            cidade: "Dois Vizinhos",
            rua: "Wenceslau",
            numero: "166",
            bairro: "Torres",
            cep: "85660-000",
            telefone: "(51)99999-9999",
            tipo_usuario: "proprietario",
            
        });

        const tecnico = await Tecnico.create({
            id: user.dataValues.id,
            ano_formatura: "2020",
            tipo_registro: "CREA",
            registro_profissional: "123456"
        });
        expect(tecnico).not.toBeNull();
    });

    test('Deverá cadastrar novo Proprietário', async () => {
        const user = await Usuario.create({
            nome: "Marco",
            email: "marco@proprietario.com",
            senha: "123456",
            cpf: "123-457-157/54",
            cidade: "Dois Vizinhos",
            rua: "Wenceslau",
            numero: "166",
            bairro: "Torres",
            cep: "85660-000",
            telefone: "(51)99999-9999",
            tipo_usuario: "proprietario",
        });


        console.log('user ', user);
        const proprietario = await Proprietario.create({
            id: user.dataValues.id,
            cnpj: '123456'
        });

        expect(proprietario).not.toBeNull();
    });

    afterAll(() => {
        connection.destroy();
    });

});