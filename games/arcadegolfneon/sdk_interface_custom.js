// settings
// SDK_INTERFACE_SETTINGS.menuless = false;

let isFirstLevelStartEvent = true;

SDK_INTERFACE_OVERRIDES.famobi.gameReady = () => {
	window.famobi_onPauseRequested = () => {};
	window.famobi_onResumeRequested = () => {};

	setTimeout(() => {
		window.famobi.hideSplashScreen();
	}, 500);
};

// overrides
SDK_INTERFACE_OVERRIDES.famobi_analytics.trackEvent = (event, params) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(event, params);

		switch(event) {
			case "EVENT_LEVELFAIL":
				break;
			case "EVENT_LEVELRESTART":
				window.parent.cmgGameEvent("replay", "" + params.levelName);
				break;
			case "EVENT_LEVELSTART":
				if(!isFirstLevelStartEvent) {
					return window.famobi.showAd(() => {
						window.parent.cmgGameEvent("start", "" + params.levelName);
						return resolve(event, params);
					});
				} else {
					isFirstLevelStartEvent = false;
					window.parent.cmgGameEvent("start", "" + params.levelName);
				}
				break;
			case "EVENT_LEVELSUCCESS":
				break;
			case "EVENT_LEVELSCORE":
				break;
			case "EVENT_LIVESCORE":
				break;
			case "EVENT_TOTALSCORE":
				break;
			case "EVENT_VOLUMECHANGE":
				break;
			case "EVENT_CUSTOM":
				break;
			case "EVENT_TUTORIALCOMPLETED":
				break;
			case "EVENT_TUTORIALSKIPPED":
				break;
			case "EVENT_PAUSE":
				break;
			case "EVENT_RESUME":
				break;
			default:
				// do nothing
		};

		return resolve(event, params);
	});
};

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackScreen = (screen, pageTitle) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(screen, pageTitle);

		switch(screen) {
			case "SCREEN_HOME":
				break;
			default:
				// ...
		}

		return resolve(screen, pageTitle);
	});
};