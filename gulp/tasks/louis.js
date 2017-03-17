const config = require("../config.js");

const gulp = require("gulp");
const louis = require("gulp-louis");

gulp.task("louis", function() {
	louis({
		url: config.louis.url,
		timeout: 60,
		viewport: "1440x900",
		engine: "webkit",
		//userAgent: "Chrome/37.0.2062.120",
		noExternals: false,
		performanceBudget: {
			httpTrafficCompleted: 750,
			htmlSize: 10000,
			cssSize: 20000,
			jsSize: 10000,
			jsonSize: 2000,
			imageSize: 10000,
			videoSize: 10000,
			webfontSize: 10000,
			firstPaint: 500,
			domInteractive: 500,
			domContentLoaded: 1500,
			domContentLoadedEnd: 2500,
			domComplete: 2500,
			timeToFirstByte: 50,
			timeToFirstCss: 500,
			timeToFirstJs: 800,
			timeToFirstImage: 2000,
			requests: 30,
			medianLatency: 100,
			medianResponse: 100,
			slowestResponse: 1000
		}
	});
});

/*
requests
gzipRequests
postRequests
httpsRequests
notFound
bodySize
contentLength
httpTrafficCompleted
timeToFirstByte
timeToLastByte
ajaxRequests
htmlCount
htmlSize
cssCount
cssSize
jsCount
jsSize
jsonCount
jsonSize
imageCount
imageSize
videoCount
videoSize
webfontCount
webfontSize
base64Count
base64Size
otherCount
otherSize
cacheHits
cacheMisses
cachePasses
cachingNotSpecified
cachingTooShort
cachingDisabled
oldCachingHeaders
consoleMessages
cookiesSent
cookiesRecv
domainsWithCookies
documentCookiesLength
documentCookiesCount
documentHeight
commentsSize
whiteSpacesSize
DOMelementsCount
DOMelementMaxDepth
nodesWithInlineCSS
imagesScaledDown
imagesWithoutDimensions
DOMidDuplicated
hiddenContentSize
DOMmutationsInsertsv
DOMmutationsRemoves
DOMmutationsAttributes
DOMqueries
DOMqueriesWithoutResults
DOMqueriesById
DOMqueriesByClassName
DOMqueriesByTagName
DOMqueriesByQuerySelectorAll
DOMinserts
DOMqueriesDuplicated
DOMqueriesAvoidable
domains
maxRequestsPerDomain
medianRequestsPerDomain
eventsBound
eventsDispatched
globalVariables
globalVariablesFalsy
headersCount
headersSentCount
headersRecvCount
headersSize
headersSentSize
headersRecvSize
headersBiggerThanContent
jQueryVersion
jQueryVersionsLoaded
jQueryOnDOMReadyFunctions
jQueryWindowOnLoadFunctions
jQuerySizzleCalls
jQueryEventTriggers
jQueryDOMReads
jQueryDOMWrites
jQueryDOMWriteReadSwitches
documentWriteCalls
evalCalls
jsErrors
closedConnections
localStorageEntries
redirects
redirectsTime
repaints
firstPaint
requestsToDomContentLoaded
requestsToDomComplete
assetsNotGzipped
assetsWithQueryString
assetsWithCookies
smallImages
smallCssFiles
smallJsFiles
multipleRequests
timeToFirstCss
timeToFirstJs
timeToFirstImage
domInteractive
domContentLoaded
domContentLoadedEnd
domComplete
timeBackend
timeFrontend
statusCodesTrail
windowAlerts
windowConfirms
windowPrompts
bodyHTMLSize
iframesCount
smallestResponse
biggestResponse
fastestResponse
slowestResponse
smallestLatency
biggestLatency
medianResponse
medianLatency
*/
