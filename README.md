ngBrowserInfo
===============

[![Build Status](https://travis-ci.org/transferwise/ng-browser-info.svg?branch=master)](https://travis-ci.org/transferwise/ng-browser-info)

ngBrowserInfo is an AngularJS service that gives you a collection of methods for knowing more about your client browser:

* Browser name and version
* OS name and version
* Are cookies enabled
* Is user using a mobile device
* Screen size
* Window size

## Installation

````
bower install ng-browser-info
````

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

// Returns object with width and size properties
browserInfo.getScreenSize();
browserInfo.getWindowSize();

// Returns Boolean
browserInfo.isMobile();
browserInfo.areCookiesEnabled();

// Returns object with name and version properties
browserInfo.getOSInfo();
browserInfo.getBrowserInfo();

// giveMeAllYouGot() collects all the method results into one object
browserInfo.giveMeAllYouGot();
````

## License

[Apache 2.0 License](//github.com/transferwise/ng-browser-info/blob/master/LICENSE)
