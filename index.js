const https = require('https')

// https.get({
https.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=test&key=${process.env.YOUTUBE_DATA_API_KEY}`,
 (res, rej) => {
    console.log('res: ', res)
    console.log('rej: ', rej)
}).on('error', (res, rej) => {
    console.log('end res: ', res)
    console.log('end rej: ', rej)
})
