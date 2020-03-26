const express = require('express');
const cors = require('cors')
const routes = require('./routes')


const app = express();

app.use(cors())
app.use(express.json()); /* Função para que o meu backend comece a entender os arquivos json, (transforme o json em objeto Javascript) */
app.use(routes); /* Para que ele consiga usar as rotas exportadas do outro local */

/*

        Métodos HTTP
    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

*/

/*

        Tipos de Parametros:
    Query Params : Parametros nomeados na rota após "?" (Filtros, paginação)
    Route Params : Parametros utilizados para identificar recursos ... (www.xxxxxxx/users/:id) 'feito pela rota'
    Request Body : corpo da requisição, utilizado para criar ou alterar recursos

*/

/*

        Tipos de banco de dados
    SQL: MySQL, *****Sqlite*******, PostgresSQL, Oracle, microsoft server
    noSQL: MongoDB, couchDB e etc

    SQLite =>
    Driver: SELECT * FROM users   .... Alguns bancos SQL variam a sintaxe de um para o outro
    Querybuilder: table('users').select('*').where() ..... esse método aceita qualquer banco SQL... 
    (npm install knex)  (npm install sqlite3)'driver do banco que vou usar', (npx knex init)

*/

app.listen(3333);

