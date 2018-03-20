# Audiomapper App Setup

## Table of Contents

- [Getting Started](#get-started)

## Getting Started
### Setup the backend locally
1. Install [Sequal pro](https://sequelpro.com/download)
2. Start a new database with the details in the config inside of the [server side repo](https://github.com/Audiomapper/server/blob/master/config/default.json)
2. Run `yarn install` and `yarn start`. Install [yarn](https://yarnpkg.com/en/docs/install) if you don't have it on your system. You may want to also install [brew](https://brew.sh/) if you don't have it as yarn install needs it for an easy install.

### Frontend
1. [brew](https://brew.sh/)
2. [Install Yarn](https://yarnpkg.com/en/docs/install)
3. Run `yarn install` to get it all the dependencies
4. Install xcode and simulator on your mac if you don't have it. Once installed open up xcode and select the `app/ios/app.xcodeproj` and open it.
5. From the menu select `Product/Destination/iphone6` or whatever device you want to try.
6. Next to the stop button at the top of the interface select `app (development)`. This is to determine what config we use.
7. Press the play button. This will start up simulator and terminal where metro builder runs.
The first time I would use xcode but prior to that you could just run `yarn start-ios` and `yarn start`.
