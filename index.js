require('dotenv').config()
const express = require('express')
const sequelize = require('sequelize')

const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
    try {
        await sequisize.authenticate()
        await sequelize.sync()     
        app.listen(PORT,  callback => console.log('Server started on port ${PORT}'))      
    
    } catch (e) {
        console.log(e)
    }
}

start()
