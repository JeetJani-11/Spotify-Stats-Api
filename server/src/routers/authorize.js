const SpotifyWebApi = require('spotify-web-api-node')
const express = require('express')
const router = new express.Router()

var scopes = ['user-read-private', 'user-read-email', 'user-top-read' , 'user-read-recently-played' , 'user-read-playback-position'],
  redirectUri = 'http://localhost:3000/callback',
  clientId = 'daa3f493706649d192c579e546334d04',
  state = 'some-state-of-my-choice';
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)

router.get('/authorize' , (req , res) => {
    res.redirect(authorizeURL)
})

module.exports = router