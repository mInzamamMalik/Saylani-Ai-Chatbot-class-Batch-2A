import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("someone is requesting on this server", new Date());
    
    res.send('Hello World from Sir Inzamam Computer!')
})

// 172.16.21.247:3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})