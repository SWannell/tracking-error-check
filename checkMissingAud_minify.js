function checkMissingAudience(){var e=new Date;endDate=e.toISOString().substring(0,10);var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()-7);startDate=t.toISOString().substring(0,10);var s="https://ga-dev-tools.appspot.com/query-explorer/?ids=ga%3A149197394&start-date=2020-01-06&end-date=2020-01-12&metrics=ga%3Asessions&dimensions=ga%3Acampaign%2Cga%3AsourceMedium%2Cga%3Akeyword%2Cga%3AadContent&filters=ga%3Akeyword%3D~%5E%5Cd%7B6%7D_%24&segment=gaid%3A%3A-1&samplingLevel=HIGHER_PRECISION&max-results=100000";return s.substring(0,79)+startDate+s.substring(89,99)+endDate+s.substring(109)}window.open(checkMissingAudience());