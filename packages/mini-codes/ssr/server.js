import http from 'node:http'

import { renderToString } from 'react-dom/server'
import handler from 'serve-handler'

import App from './src/app'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <div id="root">
            ${renderToString(<App title="SSR DEMO" />)}      
          </div>
          <script src="./client.js"></script>
        </body>
        </html>
      `
    )
  } else {
    handler(req, res, {
      public: './dist'
    })
  }
})

server.listen(3000)