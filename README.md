# spotify-navigation-lab

### 1. Clone Repository
1. Clone this repository in your SEA folder
2. In terminal, move to the project folder and then run `yarn`
3. Launch the project with `yarn expo start`
4. Open the project code in VSCode using `code .`

### 2. Set-Up Spotify
1. Log into [Spotify for Developers](https://developer.spotify.com/) and navigate to your developer dashboard
2. Click `Create App`
3. Give your app a name and description
4. For the redirect URI, input the expo URL of your project (the one that is outputted after running `yarn expo start` <img width="1346" alt="image" src="https://github.com/Snap-Engineering-Academy-2023/spotify-navigation-lab/assets/74020035/dbab2c2d-d937-49b9-b421-56bdd586541b">
6. Save your app
7. This should redirect you to a status page for your app that looks like this: <img width="1327" alt="image" src="https://github.com/Snap-Engineering-Academy-2023/spotify-navigation-lab/assets/74020035/1a808006-a540-4c99-8787-221ab5795c7c">
8. Click `Settings` to see your `Client ID`.
9. Copy this value and navigate to your `env.js` file
10. Paste this value into `CLIENT_ID` and paste your redirect URI to `REDIRECT_URI`

_Adapted from [CS47 Spotify Project](https://github.com/acui51/cs47-a3-starter-w23)_