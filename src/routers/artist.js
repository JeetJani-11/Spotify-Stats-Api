const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/artist/top', auth, (req, res) => {
    var loggedInSpotifyApi = new SpotifyWebApi();
    var access_token = req.access_token
    loggedInSpotifyApi.setAccessToken(access_token);
    loggedInSpotifyApi.getMyTopArtists()
    .then(function(data) {
      let topArtists = data.body.items;
      res.send(topArtists)
    }, function(err) {
        res.send({
            error: err.message
        })
    })
})

module.exports = router