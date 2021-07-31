const dotenv = require('dotenv')
const axios = require('axios').default
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/check-article', (req, res) => {
    const endpoint = 'https://api.meaningcloud.com/sentiment-2.1'
    const lang = 'en'
    const url  = req.body.url
    const key = process.env.API_KEY

    axios.post(endpoint, null, {
        params: {
            key,
            lang,
            url
        },
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log('Success!')
            res.status(response.status).send(response.data)
        })
        .catch(error => {
            res.status(500).send()
            console.error({ error })
        })
})
