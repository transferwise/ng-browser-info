describe('ngBrowserInfo service', function () {
	'use strict';

	var service, $window;

	beforeEach(module('ngBrowserInfo'));

	beforeEach(inject(function (_$window_, browserInfo) {
		$window = _$window_;
		service = browserInfo;

		spyOn($window, 'navigator');
	}));

	it('giveMeAllYouGot collects all method results into object', function () {
		var info = service.giveMeAllYouGot();

		expect(info.screenSize).toBeDefined();
		expect(info.windowSize).toBeDefined();
		expect(info.mobile).toBeDefined();
		expect(info.cookiesEnabled).toBeDefined();
		expect(info.os).toBeDefined();
		expect(info.browser).toBeDefined();
	});

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

		it('should be desktop when userAgent is from Mac', function () {
			$window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19';
			expect(service.isMobile()).toBeTruthy();
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
		},
		{
			browser: {name: 'Firefox', version: '31.0'},
			os: {name: 'Linux', version: undefined},
			agent: 'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
		},
		{
			browser: {name: 'Microsoft Internet Explorer', version: '11.0'},
			os: {name: 'Windows', version: '8.1'},
			agent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko'
		},
		{
			browser: {name: 'Opera', version: '12.16'},
			os: {name: 'Ubuntu', version: '14.10'},
			agent: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'
		},
		{
			browser: {name: 'Chrome', version: '38.0.2125.122'},
			os: {name: 'Mac OS X', version: undefined},
			agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36'
		},
		{
			browser: {name: 'Chrome', version: '18.0.1025.166'},
			os: {name: 'Android', version: '4.2.1'},
			agent: 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
		}
	];
});