describe('ngBrowserInfo service', function () {
	'use strict';

	var service, $window;

	beforeEach(module('ngBrowserInfo'));

	beforeEach(inject(function (_$window_, browserInfo) {
		$window = _$window_;
		service = browserInfo;

		spyOn($window, 'navigator');
	}));

	describe('measures screen and window sizes', function () {

		it('should give screen size object that contains width and height', function () {
			var screenSize = service.getScreenSize();

			expect(screenSize.width).toBe(screen.width);
			expect(screenSize.height).toBe(screen.height);
		});

		it('should give window size object that contains width and height', function () {
			var windowSize = service.getWindowSize();

			expect(windowSize.width).toBe($window.innerWidth);
			expect(windowSize.height).toBe($window.innerHeight);
		});
	});

	describe('detect mobile and desktop difference', function () {

		it('should be desktop when userAgent is from Mac', function () {
			$window.navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34';
			expect(service.isMobile()).toBeFalsy();
		});
	});

	describe('check if cookies are enabled', function () {

		it('should be enabled if navigator cookieEnabled is true', function () {
			$window.navigator.cookieEnabled = true;
			expect(service.areCookiesEnabled()).toBeTruthy();
		});

		it('should be disabled if navigator cookieEnabled is false', function () {
			$window.navigator.cookieEnabled = false;
			expect(service.areCookiesEnabled()).toBeFalsy();
		});

		it('should create cookie and read it when navigator cookieEnabled is undefined', function () {
			$window.navigator.cookieEnabled = undefined;
			expect(service.areCookiesEnabled()).toBeTruthy();
		});
	});

	describe('gets OS name and version via object', function() {

		it('should have correct OS name and version based on userAgent', function () {
			for (var i = 0; i < userAgentList.length; i ++) {
				$window.navigator.userAgent = userAgentList[i].agent;
				$window.navigator.appVersion = userAgentList[i].appVersion;

				expect(service.getOSInfo()).toEqual(userAgentList[i].os);
			}
		});
	});

	describe('gets Browser name and version via object', function() {

		it('should have correct Browser name and version based on userAgent', function () {
			for (var i = 0; i < userAgentList.length; i ++) {
				$window.navigator.userAgent = userAgentList[i].agent;
				expect(service.getBrowserInfo()).toEqual(userAgentList[i].browser);
			}
		});
	});

	var userAgentList = [
		{
			browser: {name: 'Microsoft Internet Explorer', version: '10.0'},
			os: {name: 'Windows', version: '7'},
			agent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727)'
		},
		{
			browser: {name: 'Chrome', version: '38.0.2125.122'},
			os: {name: 'Mac OS X', version: '10.10.1'},
			agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36'
		},
		{
			browser: {name: 'Safari', version: '8.0'},
			os: {name: 'Mac OS X', version: '10.10.1'},
			agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25'
		},
		{
			browser: {name: 'Safari', version: '8.0'},
			os: {name: 'iOS', version: '8.0'},
			agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4',
			appVersion: '5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
		}
	];
});