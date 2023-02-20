const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const sampleVar = process.env.SAMPLE_ENV_VAR;
    res.send('Hello World! ' + sampleVar)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})