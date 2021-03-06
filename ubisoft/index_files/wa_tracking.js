(function () {

//Local Tracking App
var tcApp = {};

//cofigs order of tracking functions
tcApp._init = function init() {
    if (!window.wa_data && !window.tc_vars) {
        return;
    }
    tcApp._setTcVars();
    tcApp._addScripts();
};

//sets tc_vars as a window object
tcApp._setTcVars = function setTcVars() {

    function readCookie(name) {
        var nameEqualsString = name + "=";
        var splitCookies = document.cookie.split(';');
        var splitCookiesLength = splitCookies.length;
        for (var i = 0; i < splitCookiesLength; i++) {
            var c = splitCookies[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEqualsString) === 0) return c.substring(nameEqualsString.length, c.length);
        }
        return null;
    }

function checkNested(obj) {
    if (obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
        return true;
    } else {
        return false
    }
}

    function createTcObject() {
        var cookieValue = readCookie("user_id");
        var wadataProfileLoginStatusExists = checkNested(window.wa_data, 'profile', 'loginStatus');
        var wadataNav;
        var tc_vars = window.tc_vars || {};
        tc_vars.nav = tc_vars.nav || {};
        tc_vars.profile = tc_vars.profile || {};
        var tc_varsNav = tc_vars.nav;
        var tc_varsProfile = tc_vars.profile;
        var wadataProfile = wadataProfileLoginStatusExists ? window.wa_data.profile : '';
        if (window.wa_data) {
            tc_vars.adblock = window.wa_data.adblock;
            wadataNav = window.wa_data.nav || window.wa_data;
            tc_varsNav.siteCategory = 'Responsive Site';
            tc_varsNav.environment = wadataNav.environment;
            tc_varsNav.siteType = wadataNav.siteType;
            tc_varsNav.siteName = wadataNav.siteName;
            tc_varsNav.pageName = wadataNav.pageName;
            tc_varsNav.fullPagePath = wadataNav.fullPagePath;
            tc_varsNav.siteSection = wadataNav.siteSection;
            tc_varsNav.sectionName = wadataNav.sectionName;
            tc_varsNav.siteSubSection = wadataNav.siteSubSection;
            tc_varsNav.country = wadataNav.country;
            tc_varsNav.language = wadataNav.language;
            tc_varsNav.mdmBID = wadataNav.mdmBID;
            tc_varsNav.mdmIID = wadataNav.mdmIID;
            tc_varsNav.game = wadataNav.game;
            tc_varsNav.brand = wadataNav.brand;
            tc_varsNav.genomeID = wadataNav.genomeID;
            tc_varsNav.appID = wadataNav.appID;
            tc_varsNav.errortype = wadataNav.errortype;
            tc_varsNav.emeatrackingcontainer = wadataNav.emeatrackingcontainer;
            tc_varsProfile.uplayID = cookieValue || wadataProfile.ubisoftId || '';
            tc_varsProfile.loginStatus = (cookieValue || wadataProfile.loginStatus == "1") ? "1" : "0";
            tc_varsProfile.loginSuccess = (cookieValue || wadataProfile.loginStatus == "1") ? "1" : "0";
            tc_varsNav.userTicket = wadataNav.userTicket;
            tc_varsNav.csbanner = wadataNav.csbanner;
            tc_varsNav.articleID = wadataNav.articleID;
            tc_varsNav.platformSelection = wadataNav.platformSelection;
            tc_varsNav.playerStatus = wadataNav.playerStatus;
            tc_varsNav.abTesting = wadataNav.abTesting;
            tc_varsNav.privacyPolicy = wadataNav.privacyPolicy;
            tc_varsNav.domContent = Math.ceil(performance.timing.domContentLoadedEventEnd - performance.timeOrigin) / 1000;
            tc_varsNav.windowLoad = Math.ceil(performance.timing.domComplete - performance.timeOrigin) / 1000;
            tc_varsNav.doNotAttach = wadataNav.doNotAttach;
            tc_varsNav.autoTrigger = wadataNav.autoTrigger;
        }
        window.tc_vars = tc_vars;
    }

    function setTcVarsInit() {
        window.readCookie = readCookie; //temp fix for undefined error in ncsaworldwide
        createTcObject();
    }
    setTcVarsInit();
};

//calls tc scripts
tcApp._addScripts = function addScripts() {

    var settings = (function setSettings() {
        var locale = (window.tc_vars && window.tc_vars.nav && window.tc_vars.nav.country) ? window.tc_vars.nav.country.toLowerCase() : '';
        return {
            isNCSA: ['us', 'ca', 'mx', 'br'].indexOf(locale) > -1,
        };
    })();

    function getScript(source, callback) {
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        script.async = 1;
        prior.parentNode.insertBefore(script, prior);

        script.onload = script.onreadystatechange = function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                script.onload = script.onreadystatechange = null;
                script = undefined;
                if (!isAbort) {
                    if (callback) callback();
                }
            }
        };
        script.src = source;
    }

    function addNcsaScripts() {
        var testEnvironmentVal = ['uat', 'dev', 'preview'];
        var environmentVal = window.tc_vars.nav.environment.toLowerCase();
        var geronimoRootPath = testEnvironmentVal.indexOf(environmentVal) > -1 ? "//ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/js/uat/" : "//ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/js/prod/";
        getScript('https://ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/ads/ads.js');
        getScript(geronimoRootPath + 'tc_ncsaworldwidecontainer.js');
    }

    function addEmeaScripts() {
        var a = Math.random() * 10000000000000;
        getScript('//ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/js/tc_UbiWorldWide_1.js');
        if (window.tc_vars.nav.emeatrackingcontainer) {
            getScript(tc_vars.nav.emeatrackingcontainer);
        };
    }

    function addScriptsInit() {
        if(window.tc_vars && window.tc_vars.nav && window.tc_vars.nav.uplayID !== '898162c7-9dc0-416e-955a-80017395e79d')
        if (settings.isNCSA) {
            addNcsaScripts();
        } else {
            addEmeaScripts();
        }
    }
    if (window.wa_data){
if(!wa_data.doNotAttach == true || wa_data.doNotAttach == "false"){
        addScriptsInit();
    }
}
};

tcApp._init();

})();
