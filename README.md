# forecasto
A simple web app that fetches 5 day forecast from http://openweathermap.org/forecast5
It is developed using ES2015, HTML5, CSS3, SASS, HandleBars, Browserify, Babel, Karma. Initial boiler plate is generated using yeoman.
Demo at http://178.62.117.140

## Installation

 Make sure that you have API key from http://openweathermap.org/appid , a sample API key is already in config.js
 

```sh
❯ npm install
```

## Usage

There are some shortcut scripts in the [package.json] that you can run [using npm][scripts].

Start the local server at [http://localhost:9000](http://localhost:9000) and watch files for changes:

```sh
❯ npm start
```

Run tests:

```sh
❯ npm test
```

Make a compressed production-ready build:

```sh
❯ npm run build
```

Preview the build, make sure nothing is broken:

```sh
❯ npm run preview
```



## To Do
- Add e2e tests using Selenium.
- Add test coverage.
- Add docker image.
- Add continuous integration.
- Add auto deployment.
- Add city selection
- Add hourly forecast.
- Add location based forecast.
- Add detailed weather information like wind, humidity etc.

