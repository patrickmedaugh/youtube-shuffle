const randomWords = require('random-words')
const https = require('https')

const wordCount = process.argv[2] || 1
const words = randomWords(wordCount).join('%20')

const start = new Date('2005-05-01')
const end = new Date()
const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
const randomTomorrow = new Date(randomDate.setDate(randomDate.getDate() + 1))
const randomDateISO = randomDate.toISOString()  //.split('T')[0]
const randomTomorrowISO = randomDate.toISOString() //.split('T')[0]

console.log('words to search: ', words)
console.log('random date: ', randomDate)
console.log('random tomorrow: ', randomTomorrow)
console.log('url: ', `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${words}&publishedAfter=${randomDateISO}&publishedBefore=${randomTomorrowISO}&key=${process.env.YOUTUBE_DATA_API_KEY}`)
https.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${words}&publishedAfter=${randomDateISO}&publishedBefore=${randomTomorrowISO}&key=${process.env.YOUTUBE_DATA_API_KEY}`,
    (res, rej) => {
        res.on('data', d => {
            process.stdout.write(d);
        })
    })