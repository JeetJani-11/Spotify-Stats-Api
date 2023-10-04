const express = require('express')
const app = express()

const playkistRouter = require('./routers/playlist')
const genreRouter = require('./routers/genre')
const artistRouter = require('./routers/artist')
const authorizeRouter = require('./routers/authorize')
const callbackRouter = require('./routers/callback')
const trackRouter = require('./routers/track')

const port = process.env.PORT || 3000

app.use(express.json())
app.use(playkistRouter)
app.use(genreRouter)
app.use(trackRouter)
app.use(artistRouter)
app.use(authorizeRouter)
app.use(callbackRouter)

app.get('', (req, res) => {
  res.send("Cookie")
})

app.listen(port, () => {
  console.log("Server is up on port" + port)
})


