!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"plusTaskButton",(function(){return me})),n.d(t,"plusProjectButton",(function(){return fe})),n.d(t,"userProjects",(function(){return Me})),n.d(t,"projectCount",(function(){return Te})),n.d(t,"currentProject",(function(){return Pe})),n.d(t,"currentProjectName",(function(){return pe})),n.d(t,"content",(function(){return ye}));const a=document.getElementById("sideBar"),r=()=>{"23%"===a.style.width?a.style.width="0":a.style.width="23%"},o=()=>{let e=[];for(const t of Me){let n={id:t.id,name:t.name,tasks:t.tasks};e.push(n)}window.localStorage.setItem("userProjects",JSON.stringify(e))};function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function d(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){i(1,arguments);var t=d(e);return!isNaN(t)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var l={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var d=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function f(e){return function(t,n){var a=String(t),r=n||{},o=a.match(e.matchPattern);if(!o)return null;var i=o[0],d=a.match(e.parsePattern);if(!d)return null;var s=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(i.length)}}}function g(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=a.match(i);if(!d)return null;var s,c=d[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(u,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(u,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}var p={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:l,formatRelative:function(e,t,n,a){return m[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:f({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function y(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){i(2,arguments);var n=d(e).getTime(),a=y(t);return new Date(n+a)}function v(e,t){i(2,arguments);var n=y(t);return w(e,-n)}function b(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var C={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return b("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},d:function(e,t){return b(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return b(e.getUTCHours()%12||12,t.length)},H:function(e,t){return b(e.getUTCHours(),t.length)},m:function(e,t){return b(e.getUTCMinutes(),t.length)},s:function(e,t){return b(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return b(Math.floor(a*Math.pow(10,n-3)),t.length)}};function P(e){i(1,arguments);var t=1,n=d(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function T(e){i(1,arguments);var t=d(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=P(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=P(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function M(e){i(1,arguments);var t=T(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=P(n);return a}function k(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:y(r),s=null==n.weekStartsOn?o:y(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=d(e),u=c.getUTCDay(),l=(u<s?7:0)+u-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function E(e,t){i(1,arguments);var n=d(e,t),a=n.getUTCFullYear(),r=t||{},o=r.locale,s=o&&o.options&&o.options.firstWeekContainsDate,c=null==s?1:y(s),u=null==r.firstWeekContainsDate?c:y(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,u),l.setUTCHours(0,0,0,0);var m=k(l,t),h=new Date(0);h.setUTCFullYear(a,0,u),h.setUTCHours(0,0,0,0);var f=k(h,t);return n.getTime()>=m.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function x(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:y(r),d=null==n.firstWeekContainsDate?o:y(n.firstWeekContainsDate),s=E(e,t),c=new Date(0);c.setUTCFullYear(s,0,d),c.setUTCHours(0,0,0,0);var u=k(c,t);return u}var N="midnight",j="noon",D="morning",S="afternoon",W="evening",U="night";function L(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+b(o,2)}function B(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+b(Math.floor(r/60),2)+n+b(r%60,2)}var Y={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return C.y(e,t)},Y:function(e,t,n,a){var r=E(e,a),o=r>0?r:1-r;return"YY"===t?b(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){return b(T(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return C.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){i(1,arguments);var n=d(e),a=k(n,t).getTime()-x(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},I:function(e,t,n){var a=function(e){i(1,arguments);var t=d(e),n=P(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):C.d(e,t)},D:function(e,t,n){var a=function(e){i(1,arguments);var t=d(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):b(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return b(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?j:0===r?N:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?W:r>=12?S:r>=4?D:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return C.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):C.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):C.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):C.s(e,t)},S:function(e,t){return C.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return B(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return B(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return b(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return b((a._originalDate||e).getTime(),t.length)}};function q(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var I={p:H,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return q(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(r,t)).replace("{{time}}",H(o,t))}};function z(e){return e.getTime()%6e4}function X(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+z(t))%6e4:z(t))}var A=["D","DD"],F=["YY","YYYY"];function Q(e){return-1!==A.indexOf(e)}function G(e){return-1!==F.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,$=/''/g,K=/[a-zA-Z]/;function Z(e){return e.match(V)[1].replace($,"'")}var ee={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}};var te={date:u({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:u({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ne={lastWeek:"'el' eeee 'pasado a la' LT",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},ae={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"};var re={code:"es",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof ee[e]?ee[e]:1===t?ee[e].one:ee[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"en "+a:"hace "+a:a},formatLong:te,formatRelative:function(e,t,n,a){return 1!==t.getUTCHours()?ae[e]:ne[e]},localize:{ordinalNumber:function(e){return Number(e)+"º"},era:h({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:h({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:h({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sa"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:f({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:g({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|sa)/i,abbreviated:/^(dom|lun|mar|mie|jue|vie|sab)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};let oe;const ie=(e,t,n=[])=>{let a=0;return{id:e,name:t,tasks:n,addTask:e=>{n[a]=e,a++},setName:setName}},de=document.getElementById("projectList"),se=e=>{for(let t of e){let e=document.createElement("div");e.id=t.name,e.className="renderProjectItem";let n=document.createElement("div");n.className="editProject",e.appendChild(n);let a=document.createElement("div");a.className="editProjectDot_1",n.appendChild(a);let r=document.createElement("div");r.className="editProjectDot_2",n.appendChild(r);let o=document.createElement("div");o.className="editProjectDot_3",n.appendChild(o);let i=document.createElement("p");i.className="projectName",i.textContent=t.name,e.appendChild(i),de.appendChild(e)}},ce=document.querySelector(".taskListProject"),ue=e=>{ce.id="taskList_"+pe.innerText,ce.textContent="";for(let t of e)if(t.name===pe.innerText)for(let e of t.tasks){let t=document.createElement("div");t.id=e.title,t.className="taskListItem",ce.appendChild(t);let n=document.createElement("div");n.className="editTask",t.appendChild(n);let a=document.createElement("div");a.className="editProjectDot_1",n.appendChild(a);let r=document.createElement("div");r.className="editProjectDot_2",n.appendChild(r);let o=document.createElement("div");o.className="editProjectDot_3",n.appendChild(o);let i=document.createElement("h3");i.className="taskItemTitle",i.textContent=e.title,t.appendChild(i);let d=document.createElement("p");d.className="taskItemDate",d.textContent=e.dueDate,t.appendChild(d);let s=document.createElement("p");s.className="taskItemPriority",1==e.priority?(s.textContent="Prioridad Baja",s.style.textDecorationColor="yellow"):2==e.priority?(s.textContent="Prioridad Media",s.style.textDecorationColor="orange"):(s.textContent="Prioridad Alta",s.style.textDecorationColor="red"),t.appendChild(s);let c=document.createElement("label");c.className="labelTaskItemCheck",c.setAttribute("for","taskItemCheck"),c.textContent="Tarea Completada",t.appendChild(c);let u=document.createElement("input");u.id="taskItemCheck",u.className="taskItemCheck",u.type="checkbox",t.appendChild(u);let l=document.createElement("p");l.className="taskItemNotes",l.textContent=e.notes,t.appendChild(l)}},le=document.getElementById("burgerIcon"),me=document.getElementById("newTaskPlus"),he=document.getElementById("newTaskIcon"),fe=document.getElementById("newProjectPlus"),ge=document.getElementById("newProjectIcon"),pe=document.getElementById("currentProject"),ye=document.getElementById("content"),we=document.getElementsByClassName("projectName"),ve=document.getElementsByClassName("editProject"),be=document.getElementsByClassName("editTask"),Ce=document.getElementById("projectList");le.addEventListener("click",(function(){le.classList.toggle("change"),r()})),he.addEventListener("click",(function(){me.classList.toggle("changeToCross"),newTaskModal.style.display="block"})),ge.addEventListener("click",(function(){fe.classList.toggle("changeToCross"),newProjectModal.style.display="block"}));let Pe,Te=1,Me=JSON.parse(window.localStorage.getItem("userProjects")||"[]");0===Me.length?(Me.push(ie(Te,"Proyecto Prueba")),Te+=1,Pe=Me[0],o()):(Pe=Me[Me.length-1],Te=Me.length+1),se(Me),Array.prototype.forEach.call(we,(function(e){e.addEventListener("click",(function(){for(let t of Me)if(t.name==e.innerText){pe.textContent=t.name,oe.textContent=pe.textContent;break}le.classList.toggle("change"),r(),ue(Me)}))})),Array.prototype.forEach.call(ve,(function(e){e.addEventListener("click",(function(){editProjectModal.style.display="block";document.getElementById("deleteProjectButton").addEventListener("click",(function(){let t=e.closest(".renderProjectItem").id;for(let e of Me)e.name==t&&Me.splice(Me.indexOf(e),1);editProjectModal.style.display="none",Pe=Me[Me.length-1],pe.textContent=Pe.name,Ce.textContent="",o(),se(Me),location.reload(),r()}))}))})),Array.prototype.forEach.call(be,(function(e){console.log(be),e.addEventListener("click",(function(){console.log(e),editTaskModal.style.display="block";document.getElementById("deleteTaskButton").addEventListener("click",(function(){let t=e.title;console.log(t)}))}))})),pe.textContent=Pe.name,ye.appendChild((()=>{const e=document.createElement("div");e.id="newProjectModal",e.className="newProjectModal";const t=document.createElement("form");t.id="popProjectModal",t.className="popProjectModal",e.appendChild(t);const n=document.createElement("input");n.id="projectTitle",n.className="projectTitle",n.required=!0,n.maxLength=20,n.placeholder="Nombre Proyecto",t.appendChild(n);const a=document.createElement("button");a.id="cancelButton",a.className="cancelButton",a.type="button",a.textContent="Cancelar",t.appendChild(a);const r=document.createElement("input");return r.id="submitProject",r.className="submitProject",r.type="submit",r.value="Crear Proyecto",t.appendChild(r),a.addEventListener("click",(function(){fe.classList.toggle("changeToCross"),e.style.display="none"})),r.addEventListener("click",(function(){""!=n.value&&(Me.push(ie(Te,n.value)),Te++,fe.classList.toggle("changeToCross"),o())})),e})()),ye.appendChild((()=>{const e=document.createElement("div");e.id="editProjectModal",e.className="editProjectModal";const t=document.createElement("div");t.id="popEditProject",t.className="popEditProject",e.appendChild(t);const n=document.createElement("p");n.id="alertEditProject",n.className="alertEditProject",n.textContent=`Si eliminas este proyecto se perderán todas     las tareas asociadas.\n¿Quieres eliminar el proyecto "${pe.innerText}"?`,t.appendChild(n);const a=document.createElement("button");a.id="cancelEditButton",a.className="cancelEditButton",a.type="button",a.textContent="Cancelar",t.appendChild(a);const r=document.createElement("button");return r.id="deleteProjectButton",r.className="deleteProjectButton",r.type="button",r.textContent="Eliminar Proyecto",t.appendChild(r),a.addEventListener("click",(function(){e.style.display="none"})),e})()),ye.appendChild((()=>{let e=document.createElement("div");e.id="newTaskModal",e.className="newTaskModal";let t=document.createElement("div");t.id="popTaskModal",t.className="popTaskModal",e.appendChild(t),oe=document.createElement("h2"),oe.id="projectSelected",oe.className="projectSelected",oe.textContent=pe.textContent,t.appendChild(oe);let n=document.createElement("h3");n.className="modalTitle",n.textContent="Nueva Tarea",t.appendChild(n);let a=document.createElement("form");a.id="modalForm",a.className="modalForm",t.appendChild(a);let r=document.createElement("input");r.id="taskTitle",r.className="taskTitle",r.required=!0,r.maxLength=20,r.placeholder="Título",a.appendChild(r);let c=document.createElement("textarea");c.id="notes",c.className="notes",c.placeholder="Descripción",a.appendChild(c);let u=document.createElement("input");u.id="dueDate",u.className="dueDate",u.type="date",u.placeholder="Fecha",a.appendChild(u);let l=document.createElement("div");l.id="priority",l.className="priority";let m=document.createElement("label");m.className="labelPriorityButtons",m.setAttribute("for","priority"),m.textContent="Prioridad",l.appendChild(m);let h=document.createElement("span");h.id="lowPriority",h.className="lowPrioritySelected",h.textContent="Baja",l.appendChild(h);let f=document.createElement("span");f.id="mediumPriority",f.className="mediumPriority",f.textContent="Media",l.appendChild(f);let g=document.createElement("span");g.id="highPriority",g.className="highPriority",g.textContent="Alta",l.appendChild(g),a.appendChild(l);let w=document.createElement("button");w.id="cancelNewTaskButton",w.className="cancelNewTaskButton",w.type="button",w.textContent="Cancelar",a.appendChild(w);let b=document.createElement("input");return b.id="submitTask",b.className="submitTask",b.type="submit",b.value="Crear Tarea",a.appendChild(b),w.addEventListener("click",(function(){me.classList.toggle("changeToCross"),e.style.display="none"})),h.addEventListener("click",(function(){"lowPriority"==h.className&&(h.className="lowPrioritySelected",f.className="mediumPriority",g.className="highPriority")})),f.addEventListener("click",(function(){"mediumPriority"==f.className&&(f.className="mediumPrioritySelected",h.className="lowPriority",g.className="highPriority")})),g.addEventListener("click",(function(){"highPriority"==g.className&&(g.className="highPrioritySelected",h.className="lowPriority",f.className="mediumPriority")})),b.addEventListener("click",(function(){let e=r.value;if(""!=e){let t,n=c.value,a=function(e,t,n){i(2,arguments);var a=String(t),r=n||{},o=r.locale||p,c=o.options&&o.options.firstWeekContainsDate,u=null==c?1:y(c),l=null==r.firstWeekContainsDate?u:y(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=o.options&&o.options.weekStartsOn,h=null==m?0:y(m),f=null==r.weekStartsOn?h:y(r.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=d(e);if(!s(g))throw new RangeError("Invalid time value");var w=X(g),b=v(g,w),C={firstWeekContainsDate:l,weekStartsOn:f,locale:o,_originalDate:g},P=a.match(J).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,o.formatLong,C):e})).join("").match(R).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return Z(n);var i=Y[a];if(i)return!r.useAdditionalWeekYearTokens&&G(n)&&_(n,t,e),!r.useAdditionalDayOfYearTokens&&Q(n)&&_(n,t,e),i(b,n,o.localize,C);if(a.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return P}(new Date(u.value),"dd MMMM yyyy",{locale:re});"lowPrioritySelected"==h.className?t=1:"mediumPrioritySelected"==f.className?t=2:"highPrioritySelected"==g.className&&(t=3);let r=((e,t,n,a)=>({title:e,notes:t,dueDate:n,priority:a,checklist:!1}))(e,n,a,t);for(let e of Me)e.name==pe.textContent&&(e.tasks.push(r),o())}})),e})()),ue(Me)}]);