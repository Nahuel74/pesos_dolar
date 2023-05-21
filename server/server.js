const express = require('express')
const app = express()
const path = require('path')
const { localServer } = require("./fetch")

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get('/scrape', async (req, res) => {
    try {
        const data = await localServer()
        res.send(await data)
    } 
    catch (error) {
        console.error(error)
        res.status(500).send('Error occurred during scraping.')
    }
})

app.listen(3000, () => {
    console.clear()
    console.log(`Server is running on: http://localhost:3000/`)
})
