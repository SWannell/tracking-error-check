function checkMissingAudience() {
	var d1 = new Date();
	endDate = d1.toISOString().substring(0,10);
	var d2 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()-7);
	startDate = d2.toISOString().substring(0,10);
	var url2 = "https://ga-dev-tools.appspot.com/query-explorer/?ids=ga:149197394&start-date=2020-01-06&end-date=2020-01-12&metrics=ga%3Asessions&dimensions=ga%3Acampaign%2Cga%3AsourceMedium%2Cga%3Akeyword%2Cga%3AadContent&filters=ga%3Akeyword%3D~%5E%5Cd%7B6%7D_%24&segment=gaid%3A%3A-1&samplingLevel=HIGHER_PRECISION&max-results=100000";
	var newurl = url2.substring(0, 77) + startDate + url2.substring(87, 97) + endDate + url2.substring(107, );
	return newurl;
	};
var changedUrl = checkMissingAudience();
window.open(changedUrl);