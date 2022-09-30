import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('response from sir inzamam computer: ' +  req.ip);
    console.log("some changes");
    console.log("some some changes");
    res.send('response from sir inzamam computer: ' +  req.ip)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})