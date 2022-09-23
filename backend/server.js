const express = require('express')
require('dotenv').config
const chats = require('./data/data')
const app = express()

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id == req.params.id)
    res.send(singleChat)
    res.end()
})

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server running at port ${PORT}`)
)
