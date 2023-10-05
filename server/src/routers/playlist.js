const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = new express.Router()
const auth = require('../middleware/auth')
const refresh_access_token = require('../utils/refreshAccessToken')

let credentials = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
}
let loggedInSpotifyApi = new SpotifyWebApi(credentials)

const createPlaylist = async (trackObject, access_token) => {
    try {
        let tracksToBeAdded = []
        loggedInSpotifyApi.setAccessToken(access_token)
        const tracks = await loggedInSpotifyApi.getMyTopTracks(trackObject)
        tracks.body.items.forEach((item) => {
            tracksToBeAdded.push(item.uri)
        })
        const playlist = await loggedInSpotifyApi.createPlaylist('Top Songs', { 'description': 'Top 25 Songs', 'public': true })
        const data = await loggedInSpotifyApi.addTracksToPlaylist(playlist.body.id, tracksToBeAdded)
        if (data) {
            return {
                message: 'Plalist Created'
            }
        }
    } catch (e) {
        console.log(e)
        return { error: e.message }
    }
}

router.get('/playlist', auth, async (req, res) => {
    const trackObject = {
        time_range: 'short_term',
        limit: 25
    }
    if (req.query.time_range) {
        trackObject.time_range = req.query.time_range
    }
    let access_token = req.access_token
    let ret = await createPlaylist(trackObject, access_token)
    if (ret.error) {
        const body = await refresh_access_token(ret.error, req.refresh_token, loggedInSpotifyApi)
        if (body.error) {
            return res.send({
                error: body.error.message
            })
        }
        const ret1 = await createPlaylist(trackObject, body.access_token)
        if (ret1.error) {
            return res.send({
                error: ret1.error
            })
        }
        res.send({
            message: ret1.message
        })
    }
})

module.exports = router