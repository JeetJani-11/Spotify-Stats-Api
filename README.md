# Spotify-Stats-Api


This project is a Node.js and Express.js based backend API that utilizes the `spotify-web-api-node` npm module along with several other modules to interact with the Spotify Web API. The primary purpose of this API is to facilitate user authentication through the Authorization Code flow, provide access tokens to the client-side, retrieve user data such as top tracks, top artists, top genres, and recently played songs, and handle token refreshes. Additionally, it allows users to create playlists for their top songs.

## Features

This Spotify Backend API offers a range of features to enhance your music application:

- **User Authentication:** Utilizes the Spotify Authorization Code flow to securely authenticate users and grant access to their Spotify data.

- **Automatic Token Refresh:** Handles the token refresh mechanism automatically, ensuring seamless user experiences without manual intervention.

- **Retrieve Top Tracks:** Fetches a user's top tracks from Spotify, providing valuable insights into their music preferences.

- **Retrieve Top Artists:** Gathers data on a user's top artists, helping to understand their favorite musicians.

- **Retrieve Top Genres:** Provides information about the user's top genres, which can be useful for music recommendation algorithms.

- **Recently Played Songs:** Allows access to a user's recently played songs, perfect for creating a dynamic "Recently Played" section in your application.

- **Create Playlists:** Empowers users to create playlists for their top songs, enhancing their Spotify experience.


## Authentication

This API uses the Spotify Authorization Code flow for user authentication, ensuring a secure and seamless connection to the Spotify platform. Here's how it works:

1. **User Redirect:** When a user wants to authenticate, your application redirects them to the Spotify Accounts Service authorization URL.

2. **User Authorization:** The user is prompted to log in to their Spotify account and authorize your application to access their Spotify data.

3. **Access Code Exchange:** Upon successful authorization, the user is redirected back to your application with an access code.

4. **Token Retrieval:** Your application can exchange this access code for an access token .

5. **Token Refresh:** The API takes care of automatically refreshing the access token when it expires, ensuring uninterrupted access to the user's data.

By following this authentication flow, your application can securely authenticate users and provide them with access to their Spotify data while maintaining a high level of security and user convenience.

