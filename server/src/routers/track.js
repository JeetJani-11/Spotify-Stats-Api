const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/track/top', auth, (req, res) => {
    var loggedInSpotifyApi = new SpotifyWebApi();
    var access_token = req.access_token
    loggedInSpotifyApi.setAccessToken(access_token);
    loggedInSpotifyApi.getMyTopTracks(
        {
            time_range: 'short_term',
            limit: 25
        }
    ).then(function (data) {
        res.send(data.body.items)
    }, function (err) {
        res.send({
            error: err.message
        })
    });
})

router.get('/track/recent' , auth , (req , res) => {
    var loggedInSpotifyApi = new SpotifyWebApi();
    var access_token = req.access_token
    loggedInSpotifyApi.setAccessToken(access_token)
    loggedInSpotifyApi.getMyRecentlyPlayedTracks({
        limit : 20
      }).then(function(data) {
          res.send(data.body.items)
        }, function(err) {
            res.send({
                error: err.message
            })
        });
} )

module.exports = router