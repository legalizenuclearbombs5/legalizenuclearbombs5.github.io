let _adBreakStart = null;
let _adBreakComplete = null;

/*
	SETTINGS
 */
const SDK_INTERFACE_SETTINGS = {

	isProd: !!IS_PROD_ENV,
	debugLevel: !!IS_PROD_ENV ? 0 : 1,
	forceMockObject: true,

	// ads
	interstitial: {
		enabled: true, // enable/disable interstitial ads
		initial: false, // show initial ad
		preload: 250, // preload interval in ms
		retry: 250, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		cooldown: 0, // time between ads
		attempts: 3 // retry limit
	},
	rewarded: {
		enabled: false, // enable/disable rewarded ads
		preload: 250, // preload interval in ms
		retry: 1000, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		reward: true, // reward when in doubt,
		attempts: 0 // retry limit
	},

	// files to load
	externalFiles: ["sdk_interface_custom.js", "//ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js", "//www.coolmathgames.com/sites/default/files/cmg-ads.js"],

	// features
	features: {
		auto_quality: false,
		copyright: false,
		credits: false,
		external_achievements: false,
		external_leaderboard: false,
		external_mute: false,
		external_pause: false,
		external_start: false,
		forced_mode: false,
		leaderboard: false,
		multiplayer: false,
		multiplayer_local: true,
		skip_title: false,
		skip_tutorial: false,
		rewarded: false
	},

	// forced mode
	forced_mode: {

	},

	// misc
	aid: "A1234-5", // affiliate id
	name: "Coolmath Games", // name of partner/customer
	branding_url: "",
	branding_image: "logo", // "logo" = transparent
	show_splash: true,
	menuless: true
};

const SDK_INTERFACE_OVERRIDES = {
	famobi: {

		/*
		getCurrentLanguage: function() {
			return "en";
		},
		*/

		gameReady: function(progress) {
			setTimeout(() => {
				window.famobi.hideSplashScreen();
			}, 500);
		},

		/*
		playerReady: function(progress) {

		},
		*/
	},
	famobi_analytics: {
		trackEvent: function(event, params) {
			SDK_INTERFACE.getDebugLevel() && console.log(event, params);
			return resolve(event, params);
		}
	}
}

const SDK_INTERFACE_PRELOAD_AD = function(type) {

	return new Promise(function(resolve, reject) {
		resolve();
	});
};

const SDK_INTERFACE_SHOW_AD = function() {

	return new Promise(function(resolve, reject) {

		_adBreakStart = () => {
			SDK_INTERFACE.getDebugLevel() && console.log('%c adBreakStart', 'background: green; color: #bada55');
		}

		_adBreakComplete = () => {
			SDK_INTERFACE.getDebugLevel() && console.log('%c adBreakComplete', 'background: green; color: #bada55');
			
			setTimeout(() => {
				resolve();
			}, SDK_INTERFACE_SETTINGS.isProd ? 0 : 2000);
		}
		
		cmgAdBreak();
	});
};

const SDK_INTERFACE_REWARDED_AD = function() {

	return new Promise(function(resolve, reject) {
		resolve();
	});
};

const SDK_INTERFACE_MOCK_OBJECT = function() {

	return new Promise(function(resolve, reject) {
		resolve();
	});
};

const SDK_INTERFACE_INIT = function() {

	if(SDK_INTERFACE_SETTINGS.isProd) {
		window.console = {
		    log: function() {},
		    warn: function() {},
		    info: function() {},
		    error: function() {},
		    debug: function() {}
		};
	}

	/*
		STARTING GAME AFTER SITE LOCK CHECK
	 */
	const siteRegEx = /^([-a-zA-Z0-9\.]+)\coolmath-games\.com(\/|$)/;

	return new Promise(function(resolve, reject) {

		if(typeof window.parent.cmgGameEvent === "undefined") {
			window.parent.cmgGameEvent = (event, level) => {
				SDK_INTERFACE.getDebugLevel() && console.log('%c window.parent.cmgGameEvent("'+event+'", "'+level+'") ', 'background: red; color: #bada55');
			}
		}

		document.addEventListener("adBreakStart", () => {
			typeof _adBreakStart === "function" && _adBreakStart();
		});

		document.addEventListener("adBreakComplete", () => {
			typeof _adBreakComplete === "function" && _adBreakComplete();
		});

		/*
			UNLOCK ALL LEVELS
		 */
		window.unlockAllLevels = function() {
			// nothing to do here...
		};

		resolve();
	});
};

SDK_INTERFACE.init(SDK_INTERFACE_SETTINGS);