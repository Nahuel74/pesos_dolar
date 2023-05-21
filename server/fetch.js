const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const cheerio = require('cheerio')

async function localServer(){
    try {
        const getData = await fetch("https://dolarhoy.com/")
        const html = await getData.text()
        const $ = cheerio.load(html)
        let values = []

        $("div").filter(".val").each(
            (index, element) => {
                values.push($(element).text())
            }
        )
        return values
    }
    catch (error){
        console.error(error);
        throw error
    }
}

module.exports = { localServer }