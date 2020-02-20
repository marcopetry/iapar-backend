const Usuario = require('../../src/models/Usuario');
const Tecnico = require('../../src/models/Tecnico');
const Proprietario = require('../../src/models/Proprietario');
const Propriedade = require('../../src/models/Propriedade');
const connection = require('../../src/database/index');

describe('Propriedade', () => {

    beforeAll(() => {
        Usuario.init(connection);
        Tecnico.init(connection);
        Proprietario.init(connection);
        Propriedade.init(connection);
    });

    beforeEach(async () => {
        await Usuario.destroy({ truncate: true, force: true, cascade: true });
        await Tecnico.destroy({ truncate: true, force: true, cascade: true });
        await Proprietario.destroy({ truncate: true, force: true, cascade: true });
        await Propriedade.destroy({ truncate: true, force: true, cascade: true });
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

        //console.log(user);
        const proprietario = await Proprietario.create({
            "id": user.dataValues.id,
            "cnpj": '123456',
        });
    });

    test('Deverá cadastrar nova propriedade', async () => {
        const proprietario = await Usuario.findOne({ where: { email: 'marco@proprietario.com' }, attributes: ['id'] });
        console.log('propriedade ', proprietario);
        const response = await Propriedade.create({
            'id_proprietario': proprietario.dataValues.id,
            'nome_propriedade': 'Perto daqui',
            'longitude': -48.85621,
            'latitude': -52.56484,
            'qtd_pessoas_envolvidas_atividade': 5,
            'data_inicio_programa': new Date(Date.UTC(2016, 5, 1)),
            'data_proxima_visita': new Date(Date.UTC(2016, 5, 20)),
        });
        expect(response).not.toBeNull();
    });

    afterAll(() => {
        connection.destroy();
    });

});