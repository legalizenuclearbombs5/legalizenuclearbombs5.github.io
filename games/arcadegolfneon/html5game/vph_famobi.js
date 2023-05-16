// **********************************************************************************************************************
// File:			famobi.js
// Created:			12/2/2015
// Author:			Javier M. Ramirez
// Project:			HTML5
// Description:			famobi API integration
// Date				Version		BY		Comment
// ----------------------------------------------------------------------------------------------------------------------
// 12/2/2015	V1.0	FMS	1st version.
//
// 01/19/2016	V1.0	FMS	Added Pause Functions.
//
// 01/28/2016   V1.1	FMS	Fixed More Games Button Script
//				Added Local Storage functions
//
// **********************************************************************************************************************

function famobi_alert() { alert('maia'); }

function famobi_gameOver(){ famobi.gameOver(); }

function famobi_levelUp(){ famobi.levelUp(); }

function famobi_submitHighscore(level, score){ famobi.submitHighscore(level, score); }

function famobi_showAd(callback, force){ famobi.showAd(callback, force); }

function famobi___(key){ famobi.__(key); }

function famobi_forceAd(callback){ famobi.forceAd(callback); }

function famobi_getMoreGamesButtonImage(){ return famobi.getMoreGamesButtonImage(); }

function famobi_moreGamesLink(){ famobi.moreGamesLink(); }


// Local Storage

function famobi_localStorage_set(key,value){ famobi.localStorage.setItem(key,value); } // set

function famobi_localStorage_get(key,default_value){
	
	js_keyvalue = famobi.localStorage.getItem(key);

	if ( js_keyvalue === undefined ) {
		
		return default_value;
	}
	else if ( js_keyvalue === null ) {
		
		return default_value;
	}
	else {
		
		return js_keyvalue;
	}
}
 


// Ads Pause Functions

js_pause = false;

function famobi_onPauseRequested(){ js_pause = true; }

function famobi_onResumeRequested(){ js_pause = false; }

function famobi_getJSpause(){ return js_pause; }
