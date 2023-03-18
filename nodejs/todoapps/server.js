
const PORT =  8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
// print('a;lfkjs;l)

app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news',(req, res) => {
    axios.get("https://www.theguardian.com/environment/climate-crisis")
    .then(res => console.log(res.data))
    .catch(err=> console.error(err))
     
    //res.json(articles)
})
