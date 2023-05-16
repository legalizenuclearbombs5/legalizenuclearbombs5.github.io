// **********************************************************************************************************************
// File:			Dogfire_analytics.js
// Created:			11/14/2015
// Author:			Javier M. Ramirez
// Project:			HTML5
// Description:			Submit String for Analytics
// Date				Version		BY		Comment
// ----------------------------------------------------------------------------------------------------------------------
// 11/14/2015		V1.0		FMS		1st version.
//
// **********************************************************************************************************************

function js_DogfireAnalytics_send(_AnalyticsString) {
	return;
	document.getElementById('Action_iFrame').src = 'http://www.dogfiregames.com/game_files/neon_golf/analytics/index.php?entry=' + _AnalyticsString;
}