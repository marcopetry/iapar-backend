//const Usuario = require('../../src/models/Usuario');
//const Sequelize = require('sequelize');
//const dbConfig = require('../../src/config/database');
//const connection = new Sequelize(dbConfig);

const Usuario = require('../../src/models/Usuario');
const Tecnico = require('../../src/models/Tecnico');

const connection = require('../../src/database/index');
Usuario.init(connection);
Tecnico.init(connection);

describe('Usuario', () => {
    beforeEach(async () => {
        Usuario.destroy({ truncate: true, force: true });
        Tecnico.destroy({ truncate: true, force: true });
    });
        
    it('Deverá cadastrar novo técnico', async () =>{
        const newUSer = {
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
        };
        const user = await Usuario.create(newUSer);
        expect(user).not.toBeNull();
    });
});