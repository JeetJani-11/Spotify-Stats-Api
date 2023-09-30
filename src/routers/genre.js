const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = new express.Router()
const auth = require('../middleware/auth')

function addToGenreDict(genre, genreDict) {
    genre.forEach(genre => {
      genreDict[genre] = (genreDict[genre] || 0) + 1;
    });
    return genreDict;
}

router.get('/genre/top', auth, (req, res) => {
    var loggedInSpotifyApi = new SpotifyWebApi();
    var access_token = req.access_token
    loggedInSpotifyApi.setAccessToken(access_token);
    loggedInSpotifyApi.getMyTopArtists()
    .then(function(data) {
      let topArtists = data.body.items
      let genreDict = {}
      topArtists.forEach(artist => {
        genreDict = addToGenreDict(artist.genres, genreDict);
      })
      res.send(genreDict)
    }, function(err) {
        res.send({
            error: err.message
        })
    })
})

module.exports = router
