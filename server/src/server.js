const https = require('https');
const axios = require('axios')
const express = require('express')
const cors = require('cors')
import * as ReactDOMServer from 'react-dom/server'
const app = express()
import { App } from "../../client/src/App"

app.use(cors())
// app.use(express.static('build'))

const agent = new https.Agent({
  rejectUnauthorized: false
})

let foundData

axios.get(`https://localhost:9200/data/_search`, {
  httpsAgent: agent,
  headers: { 'Content-Type': 'application/x-ndjson'},
  data: {
    'size': 500,
    'query':
      {"match_all": {}},
  },
  auth: {username: 'admin', password: 'admin'}
}).then(res => {
  foundData = res.data.hits.hits.map(data => data._source).sort((a, b) => a.id - b.id)
}).catch(error => {console.log(`error: ${error}`)})

app.get('/', (request, response) => {
  const app = ReactDOMServer.renderToString(<App />)

  const html = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `
  response.send(html);
})

app.get('/api/articles', async (request, response) => {
  try {
    response.json(foundData)
  } catch (error) {console.log(`error: ${error}`)}
})

app.get('/api/articles/:id', async (request, response) => {
  try {
    const id = request.params.id
    if (id < foundData.length) {
      const article = foundData[id - 1]
      response.json(article)
    } else {
      response.status(404).end()
    }
  } catch (error) {console.log(`error: ${error}`)}
})

app.use(express.static("./built"))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
