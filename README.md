ngBrowserInfo
===============

[![Build Status](https://travis-ci.org/transferwise/ng-browser-info.svg?branch=master)](https://travis-ci.org/transferwise/ng-browser-info)

ngBrowserInfo is an AngularJS service that gives you a collection of methods for knowing more about your client browser:

* Browser name and version
* OS name and version
* Are cookies enabled
* Is user using a mobile device
* Language
* Screen size
* Window size

## Installation

````
npm install @transferwise/ng-browser-info
````

Note: The package name in package.json is kept as `ng-browser-info` to avoid breaking the existing clients pointing directly to the github repo only. But the pacakge will be published in npm registry as `@transferwise/ng-browser-info` only.

## Usage

````javascript
// Add ngBrowserInfo as a dependency to your app
angular.module('your-app', ['ngBrowserInfo']);

// Inject browserInfo service into your controller
angular.module('your-app').controller('MainCtrl', function($scope, browserInfo) {
  // ...
});
````

#### Methods

````javascript

// Returns object with width and height properties
browserInfo.getScreenSize();
browserInfo.getWindowSize();

// Returns Boolean
browserInfo.isMobile();
browserInfo.areCookiesEnabled();

// Returns String
browserInfo.getLanguage();

// Returns object with name and version properties
browserInfo.getOSInfo();
browserInfo.getBrowserInfo();

// giveMeAllYouGot() collects all the method results into one object
browserInfo.giveMeAllYouGot();
````

## Demo

Check it out [here](http://transferwise.github.io/ng-browser-info/)

## License

[Apache 2.0 License](//github.com/transferwise/ng-browser-info/blob/master/LICENSE)
