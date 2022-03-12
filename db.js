const {Sequalize} =  require('sequalize')

module.exports = new Sequalize(
     process.env.DB_NAME, // НАЗВАНИЕ БАЗЫ ДАННЫХ
     process.env.DB_USER, // ПОЛЬЗОВАТЕЛЬ
     process.env.DB_PASSWORD, // ПАРОЛЬ 
     {
         dialect: 'postgres',
         host: process.env.DB_HOST,
         port: process.env.DB_PORT
     }

)