ngBrowserInfo
===============

[![Build Status](https://travis-ci.org/transferwise/ng-browser-info.svg?branch=master)](https://travis-ci.org/transferwise/ng-browser-info)

# Master branch is outdated

A long time ago, this repo's CI pipeline was set up with Travis and Bower. We've since switched to Circle and publishing to NPM (@transferwise/ng-browser-info), but we can't upgrade master until some TW dependents stop relying on latest master of this repo on GitHub in their `package.json`s.

For now, the true head is the `next` branch. Once dependents have updated to pull from NPM instead of GitHub, we can subsume `next` back into `master`.

## Intro

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
npm install ng-browser-info
````
or
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
