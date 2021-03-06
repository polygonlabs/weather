# weather_api_for_vizrt

WeatherApiForVizrt - JavaScript client for weather_api_for_vizrt
This is a Weather API to provide Weather Data to a Vizrt Graphics System
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.3
- Package version: 1.0.3
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install weather_api_for_vizrt --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your weather_api_for_vizrt from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('weather_api_for_vizrt')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/weather_api_for_vizrt
then install it via:

```shell
    npm install YOUR_USERNAME/weather_api_for_vizrt --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var api = new WeatherApiForVizrt.DefaultApi()

var lat = 3.4; // {Number} Latitude

var lng = 3.4; // {Number} Longitude

var opts = { 
  'unitTemp': "c", // {String} Units (f, c, or k)
  'unitWind': "knot", // {String} Units (kph, mph, or knot)
  'unitRain': "cm", // {String} Units (cm or in)
  'unitSnow': "cm", // {String} Units (cm or in)
  'unitPressure': "hPa" // {String} Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.currentByLatLngGet(lat, lng, , opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://vizapi.weather-bell.com/viz-api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WeatherApiForVizrt.DefaultApi* | [**currentByLatLngGet**](docs/DefaultApi.md#currentByLatLngGet) | **GET** /current/byLatLng | Returns current weather data by latitude &amp; longitude
*WeatherApiForVizrt.DefaultApi* | [**currentByLocationIdGet**](docs/DefaultApi.md#currentByLocationIdGet) | **GET** /current/byLocationId | Returns current weather data by Location ID
*WeatherApiForVizrt.DefaultApi* | [**forecastByLatLngGet**](docs/DefaultApi.md#forecastByLatLngGet) | **GET** /forecast/byLatLng | Returns forecast data by latitude &amp; longitude
*WeatherApiForVizrt.DefaultApi* | [**forecastByLocationIdGet**](docs/DefaultApi.md#forecastByLocationIdGet) | **GET** /forecast/byLocationId | Returns forecast data by Location ID
*WeatherApiForVizrt.DefaultApi* | [**historicalByLatLngGet**](docs/DefaultApi.md#historicalByLatLngGet) | **GET** /historical/byLatLng | Returns historical Weather data by latitude, longitude &amp; timestamp
*WeatherApiForVizrt.DefaultApi* | [**historicalByLocationIdGet**](docs/DefaultApi.md#historicalByLocationIdGet) | **GET** /historical/byLocationId | Returns historical Weather data by Location ID &amp; date
*WeatherApiForVizrt.DefaultApi* | [**observationByLatLngGet**](docs/DefaultApi.md#observationByLatLngGet) | **GET** /observation/byLatLng | Returns observation data by latitude &amp; longitude
*WeatherApiForVizrt.DefaultApi* | [**observationByLocationIdGet**](docs/DefaultApi.md#observationByLocationIdGet) | **GET** /observation/byLocationId | Returns observation data by Location ID


## Documentation for Models

 - [WeatherApiForVizrt.Change](docs/Change.md)
 - [WeatherApiForVizrt.Conditions](docs/Conditions.md)
 - [WeatherApiForVizrt.Cumulative](docs/Cumulative.md)
 - [WeatherApiForVizrt.CumulativePressure](docs/CumulativePressure.md)
 - [WeatherApiForVizrt.CumulativeRain](docs/CumulativeRain.md)
 - [WeatherApiForVizrt.CumulativeSnow](docs/CumulativeSnow.md)
 - [WeatherApiForVizrt.CumulativeTemperature](docs/CumulativeTemperature.md)
 - [WeatherApiForVizrt.Humidity](docs/Humidity.md)
 - [WeatherApiForVizrt.Ice](docs/Ice.md)
 - [WeatherApiForVizrt.Location](docs/Location.md)
 - [WeatherApiForVizrt.PointData](docs/PointData.md)
 - [WeatherApiForVizrt.Pressure](docs/Pressure.md)
 - [WeatherApiForVizrt.Rain](docs/Rain.md)
 - [WeatherApiForVizrt.Series](docs/Series.md)
 - [WeatherApiForVizrt.SeriesData](docs/SeriesData.md)
 - [WeatherApiForVizrt.Snow](docs/Snow.md)
 - [WeatherApiForVizrt.Stats](docs/Stats.md)
 - [WeatherApiForVizrt.SunMoon](docs/SunMoon.md)
 - [WeatherApiForVizrt.Temperature](docs/Temperature.md)
 - [WeatherApiForVizrt.Total](docs/Total.md)
 - [WeatherApiForVizrt.UnitPressure](docs/UnitPressure.md)
 - [WeatherApiForVizrt.UnitRain](docs/UnitRain.md)
 - [WeatherApiForVizrt.UnitSnow](docs/UnitSnow.md)
 - [WeatherApiForVizrt.UnitTemp](docs/UnitTemp.md)
 - [WeatherApiForVizrt.Wind](docs/Wind.md)


## Documentation for Authorization

 All endpoints do not require authorization.

