const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit:10,
  host: '127.0.0.1', /* localhost trocado pelo endereco*/
  user: 'root',
  password: '@admin123',
  database: 'nodejsudemy'
})

module.exports = pool