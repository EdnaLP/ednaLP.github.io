(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports=="object"?module.exports=n(require("jquery")):n(jQuery)})(function(n){function i(n){return t.raw?n:encodeURIComponent(n)}function f(n){return t.raw?n:decodeURIComponent(n)}function e(n){return i(t.json?JSON.stringify(n):String(n))}function o(n){n.indexOf('"')===0&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return n=decodeURIComponent(n.replace(u," ")),t.json?JSON.parse(n):n}catch(i){}}function r(i,r){var u=t.raw?i:o(i);return n.isFunction(r)?r(u):u}var u=/\+/g,t=n.cookie=function(u,o,s){var v,c;if(arguments.length>1&&!n.isFunction(o))return s=n.extend({},t.defaults,s),typeof s.expires=="number"&&(v=s.expires,c=s.expires=new Date,c.setMilliseconds(c.getMilliseconds()+v*864e5)),document.cookie=[i(u),"=",e(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("");for(var l=u?undefined:{},y=document.cookie?document.cookie.split("; "):[],a=0,b=y.length;a<b;a++){var p=y[a].split("="),w=f(p.shift()),h=p.join("=");if(u===w){l=r(h,o);break}u||(h=r(h))===undefined||(l[w]=h)}return l};t.defaults={};n.removeCookie=function(t,i){return n.cookie(t,"",n.extend({},i,{expires:-1})),!n.cookie(t)}}),function(n){var t=n({});n.subscribe=function(){t.on.apply(t,arguments)};n.unsubscribe=function(){t.off.apply(t,arguments)};n.publish=function(){t.trigger.apply(t,arguments)}}(jQuery),function(n){function b(n){return decodeURI((RegExp(n+"=(.+?)(&|$)","i").exec(location.search)||[,""])[1])}function h(){var n=location.hostname;return n.toLowerCase().indexOf("localhost")<0?location.hostname.split(".").slice(-2).join("."):y}function o(n){typeof window.console=="object"&&typeof window.console.log=="function"&&console.log(n)}function k(t,i){var r=[];t=="faqs"||t=="news"?(n.each(i,function(n,t){r.push({id:t.Number,title:t.Title,tags:t.Tags==null?"":t.Tags})}),typeof portalSearch=="object"&&typeof portalSearch.entities=="object"&&(portalSearch.entities[t]=r)):t=="cases"?(n.each(i,function(n,t){r.push({id:t.CaseNumber,title:t.Subject,tags:""})}),typeof portalSearch=="object"&&typeof portalSearch.entities=="object"&&(portalSearch.entities.cases=r)):t=="games"?(n.each(i,function(n,t){r.push({id:t.GameUrl,title:t.Name,tags:""})}),typeof portalSearch=="object"&&typeof portalSearch.entities=="object"&&(portalSearch.entities.games=r)):t=="platforms"&&(n.each(i,function(n,t){r.push({id:t.Id,title:t.Name,tags:""})}),typeof portalSearch=="object"&&typeof portalSearch.entities=="object"&&(portalSearch.entities.platforms=r))}function c(n){if(typeof n!="string")return"";return n.replace(/\'\w{1}/g,"").replace(/\W/g,"|").replace(/\|{2,}/g,"|").replace(/(\|\w$)|(^\w\|)/g,"").replace(/(\|\w\|)/g,"|").replace(/(^\|)|(\|$)/g,"")}function d(t){var r=c(t),u=r.split("|"),i=[];return n.each(u,function(n,t){i.push("(?=.*"+t+")")}),i.join("")}function g(t){n(settings.selectors.countryFlagLinks).each(function(){var i=n(this);if(i.attr("href").toLowerCase().indexOf("/"+t.toLowerCase()+"/")==0)return i.addClass("active"),!1})}function l(){n.removeCookie(cookieNames.lastGamesPlayed,{path:"/"});n.removeCookie(cookieNames.openCasesCount,{path:"/"});n.removeCookie(cookieNames.sessionId,{path:"/"});n.removeCookie(cookieNames.ticket,{path:"/"});n.removeCookie(cookieNames.userId,{path:"/"})}function nt(t){n.cookie(cookieNames.sessionId,t.sessionId,{path:"/",expires:1});n.cookie(cookieNames.ticket,t.ticket,{path:"/",expires:1});n.cookie(cookieNames.userId,t.userId,{path:"/",expires:1})}function v(i,r){if(i)if(i.status=="ok"){if(i.payload){var u=n.cookie(cookieNames.ticket)==null;nt(i.payload);u&&setTimeout(function(){n.publish(t.events.populateInit,[r]);e.getUserProfiles({onSuccess:t.initialize});n.subscribe(t.events.populateSuccess,function(t,i){n.isArray(i)&&(window.self!=window.top?window.top.location.href=typeof destinationUrl!="undefined"?destinationUrl:window.self.location.href:window.location.href=window.location.href)})},20)}}else l()}function tt(){overlayWidget.init({appId:uplayOverlaySettings.appId,genomeId:uplayOverlaySettings.genomeId,container:uplayOverlaySettings.container,locale:uplayOverlaySettings.locale,fixedPosition:uplayOverlaySettings.fixedPosition,loginType:uplayOverlaySettings.loginType,height:uplayOverlaySettings.height,themeColor:uplayOverlaySettings.themeColor,darkBackground:uplayOverlaySettings.darkBackground,trackingSiteName:uplayOverlaySettings.trackingSiteName,trackingSiteType:uplayOverlaySettings.trackingSiteType,trackingSiteSection:uplayOverlaySettings.trackingSiteSection,onShowHide:function(){},onConnect:function(n,t){n=="init"&&v(t,n);n=="logout"?(l(),setTimeout(function(){window.location.href=window.location.href},1e3)):n=="login"&&(window.justLoggedIn=!0,v(t,n))}})}function it(){n(settings.selectors.countryFlagLinks).click(function(){n.cookie(cookieNames.languagePreference,n(this).data("code"),{path:"/"})})}function rt(){var t="0";t=Modernizr.touchevents&&/Edge\/\d+/i.test(navigator.userAgent)?et()?"1":"0":Modernizr.touchevents?"1":"0";n.cookie(cookieNames.touchSupport,t,{path:"/"});t==="0"&&n("html").removeClass("touch").addClass("no-touch")}function ut(){var t=n(".hero .hero__image").css("background-image"),i;t&&(t=t.match(/^url\("?(.+?)"?\)$/),t[1]&&(t=t[1],i=new Image,n(i).load(function(){i.width<1920&&n("body").addClass("smaller-hero")}),i.src=t))}function ft(){typeof signInPageCheck!="undefined"&&(document.getElementById("loginiframe").src=uplayConnectUrl)}function et(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))}var y=".ubi.com",s=!1,f={populateInit:"LastGamesPlayed_Populate_Init",populateSuccess:"LastGamesPlayed_Populate_Success",noGamesPlayed:"noGamesPlayed"},t={events:f,initialize:function(i){if(n.isArray(i.profiles)){var r=[];n.each(i.profiles,function(n,t){r.push(t.profileId)});e.getApplicationUsed(r,t.getApplicationUsedCallback)}},getApplicationUsedCallback:{onSuccess:function(i){i.applications.length>0?t.getLastPlayedGamesRegistered(i.applications,t.getLastPlayedGamesRegisteredSuccess):n.publish(f.noGamesPlayed,!1)},onError:function(){typeof window.justLoggedIn=="boolean"&&window.justLoggedIn==!0&&(window.location.href=window.location.href)}},getGame:function(t,i){var r=null;return n.each(t,function(t,u){var f=u.Id.indexOf("5");if((f<0||f>0||f==0&&u.Id.length<5)&&(n.each(u.Platforms,function(t,f){if(f.AppId==i)return r=n.extend({},u,{}),r.platformIdMatch=f.PlatformId,!1}),r!=null))return!1}),r},getLastPlayedGamesRegisteredSuccess:function(i,r){var u=[];typeof i=="object"&&i!=null&&n.isArray(i.Items)&&n.each(r,function(n,r){var f=t.getGame(i.Items,r.applicationId);f!=null&&(f.lastSessionDate=r.lastSessionDate,u.push(f))});t.populate(u)},getLastPlayedGamesRegistered:function(t,i){var r=[],f=function(n){return n!=null&&typeof n.lastSessionDate=="string"?-new Date(n.lastSessionDate).getTime():0},u=_.sortBy(t,f);n.each(u,function(n,t){r.push(t.applicationId)});n.ajax({url:"/api/games/played?applicationIds="+r.join(","),success:function(n){i(n,u)}})},populate:function(i){if(n.isArray(i)&&i.length>0){var r=[];n.each(i,function(n,i){var u=_.findWhere(i.Platforms,{PlatformId:i.platformIdMatch});u!=undefined&&(n==0&&t.populateNavigationCookies(i.Id,u.PlatformId),r.push(i.Id+","+u.PlatformId))});n.cookie(cookieNames.lastGamesPlayed,r.join(";"),{path:"/"})}n.publish(f.populateSuccess,[i])},populateNavigationCookies:function(t,i){var r=n.cookie(cookieNames.lastPlatform),u=n.cookie(cookieNames.lastGame);r||u||(n.cookie(cookieNames.lastPlatform,i,{path:"/"}),n.cookie(cookieNames.lastGame,t,{path:"/"}))}},u={userProfileSuccess:"UbiServices_User_Profiles",applicationUsedSuccess:"UbiServices_Application_Used",applicationDetailsSuccess:"UbiServices_Application_Details"},e={events:u,getUserProfiles:function(t){var i=n.cookie(cookieNames.ticket);if(i!=null)n.ajax({beforeSend:function(n){n.setRequestHeader("Ubi-AppId",portalConfig.appId);n.setRequestHeader("Authorization","Ubi_v1 t="+i)},url:settings.services.ubiServices+"/v2/users/me/profiles",success:function(i){if(n.publish(u.userProfileSuccess,[i]),typeof t=="object"&&typeof t.onSuccess=="function")t.onSuccess(i)},error:function(n,i,r){if(typeof t=="object"&&typeof t.onError=="function")t.onError(i,r)}});else if(typeof t=="object"&&typeof t.onError=="function")t.onError("User is not authenticated")},getApplicationUsed:function(t,i){var r={status:"",applications:[],lastSessionDate:{}},f=n.cookie(cookieNames.ticket),e;if(n.isArray(t)&&t.length>0&&f!=null)e="/v3/profiles/applications",n.ajax({beforeSend:function(t){t.setRequestHeader("Ubi-AppId",portalConfig.appId);t.setRequestHeader("Authorization","Ubi_v1 t="+f);t.setRequestHeader("Ubi-SessionId",n.cookie(cookieNames.sessionId))},url:settings.services.ubiServices+e+"?limit=100&profileIds="+t.join(","),success:function(t){if(n.publish(u.applicationUsedSuccess,[t]),typeof t.applications=="object"){if(r.status="success",r.applications=t.applications,typeof i=="object"&&typeof i.onSuccess=="function")i.onSuccess(r)}else if(r.status="error",typeof i=="object"&&typeof i.onError=="function")i.onError(r)},error:function(){if(r.status="error",typeof i=="object"&&typeof i.onError=="function")i.onError(r)}});else if(typeof i=="object"&&typeof i.onSuccess=="function"){r.status="success";r.applications=[];i.onSuccess(r)}},getApplicationDetails:function(t,i){var r={status:"",applications:[]},f=n.cookie(cookieNames.ticket),e;if(n.isArray(t)&&t.length>0&&f!=null)e="/v1/applications",n.ajax({beforeSend:function(t){t.setRequestHeader("Ubi-AppId",portalConfig.appId);t.setRequestHeader("Authorization","Ubi_v1 t="+f);t.setRequestHeader("Ubi-SessionId",n.cookie(cookieNames.sessionId))},url:settings.services.ubiServices+e+"?applicationIds="+t.join(","),success:function(t){if(n.publish(u.applicationDetailsSuccess,[t]),typeof t.applications=="object"){if(r.status="success",n.each(t.applications,function(n,t){r.applications.push(t.name)}),typeof i=="object"&&typeof i.onSuccess=="function")i.onSuccess(r)}else if(r.status="error",typeof i=="object"&&typeof i.onError=="function")i.onError(r)},error:function(){if(r.status="error",typeof i=="object"&&typeof i.onError=="function")i.onError(r)}});else if(typeof i=="object"&&typeof i.onSuccess=="function"){r.status="success";r.applications=[];i.onSuccess(r)}}},p={encode:function(t){return n("<div/>").text(t).html()},decode:function(t){return n("<div/>").html(t).text()}},w={contains:function(n){if(typeof localStorage=="object")return localStorage[n]!==undefined},save:function(n,t){typeof localStorage=="object"&&(localStorage[n]=t)},get:function(n){if(typeof localStorage=="object")return localStorage[n]},"delete":function(n){typeof localStorage=="object"&&localStorage.removeItem(n)}},r={getUrlEncodedFormBody:function(t){var r=n("input",t),i="";return r.each(function(){this.name=="sid"&&(sid=encodeURIComponent(n(this).val()));i+=this.name+"="+encodeURIComponent(n(this).val())+"&"}),i.length>0&&(i=i.substring(0,i.length-1)),i=i.replace("%20","+")},registerSession:function(t,i,r){n.ajax({url:"/api/chat/register",type:"POST",dataType:"json",contentType:"application/json",cache:!1,data:'"'+t+'"',success:function(n){i(n)},error:function(n,t,i){o("Problem registering session. "+t+i);r(n,t,i)}})},httpPostToSalesforce:function(t,i){var u={url:t.action,body:r.getUrlEncodedFormBody(t),contentType:"application/x-www-form-urlencoded",anonymousFlow:typeof chatSettings!="undefined"&&chatSettings&&chatSettings.chat&&chatSettings.chat.anonymousFlow&&chatSettings.chat.anonymousFlow.toLowerCase()=="true"};n.ajax({url:"/api/chat/post-salesforce",type:"POST",dataType:"json",cache:!1,data:u,success:function(){r.openIframeForChat(i,t.sid.value)},error:function(n,t,i){o(t+i)}})},openIframeForChat:function(t){var r,i,u;n("."+chatSettings.loaderClass).hide();r=n('<iframe id="iframe-chat-sf" src="'+chatSettings.chat.liveChatUrl+"?language="+chatSettings.chat.language+"&portalLanguage="+chatSettings.chat.portalLanguage+"&session_id="+chatSettings.chat.id+"&userId="+chatSettings.userId+"&caseNumber="+chatSettings.chat.caseNumber+"&email="+chatSettings.chat.email+"#"+t+'" />');n("#"+chatSettings.iframeContainerId).append(r);i=n("#"+chatSettings.chatBoxId);i.show();u=n(window).width();u<768&&n("html, body").scrollTop(i.offset().top)},launchChat:function(){liveagent.addButtonEventHandler(chatSettings.chat.buttonId,function(n){n==liveagent.BUTTON_EVENT.BUTTON_AVAILABLE&&s==!1&&(liveagent.startChat(chatSettings.chat.buttonId),s=!0)})}},i;g(currentLang);window.overlayInit=tt;n(document).ready(function(){rt();it();ut();ft()});i={};window.global=i;i.chat=r;i.ubiServices=e;i.html=p;i.lastGamesPlayed=t;i.localStorage=w;i.log=o;i.helper={getURLParameter:b,getDomain:h};i.portalSearch={addSearchEntity:k,getOrRegexExpression:c,getAndRegexExpression:d};window.callPostToSalesforce=r.httpPostToSalesforce;window.registerChatSession=r.registerSession}(jQuery),function(n){function t(){var t=n.cookie(cookieNames.changeToLocaleFromIP);(typeof t=="undefined"||typeof t=="string"&&t!="0")&&n("#language-warning-modal").length>0&&n("#language-warning-modal").modal("show")}function i(){n("#btnConfirmChangeLocale").click(r);n("#btnKeepCurrentLocale").click(u)}function r(){location.href=n("#redirectUrl").val()}function u(){n.cookie(cookieNames.changeToLocaleFromIP,"0",{path:"/"})}n(document).ready(function(){i();t()})}(jQuery);$(document).ready(function(){function n(){switch(window.orientation){case-90:case 90:setTimeout(function(){$("footer.footer .footer__disclaimer").css("margin-bottom","2px")},300);break;default:setTimeout(function(){$("footer.footer .footer__disclaimer").css("margin-bottom","5px")},300)}}var t=window.navigator.standalone,i=window.navigator.userAgent.toLowerCase(),r=/safari/.test(i),u=/ipad/.test(i);window.addEventListener("orientationchange",n);u&&(!t&&r?n():t&&!r&&n())}),function(n){function t(){if(pageLocalizations&&Array.isArray(pageLocalizations)){var t=[];n.each(pageLocalizations,function(i,r){n.each(r,function(i,r){n.inArray(r,t)==-1&&t.push(r)})});pageLocalizations=t;u()}}function i(n){return n.length>=1}function r(t){var r=n("#nav-locs"),i;n(".table-locs",r).remove();i=[];n.each(t,function(t,r){r&&r.localizations&&typeof r.localizations=="object"&&(i.push("<table class='table-locs table-locs-collapse'><thead><tr class='table-name-row'><th colspan='2' class='table-name'><a href='javascript:;' class='toggle-locs-menu'><span class='glyphicon glyphicon-plus'><\/span><span class='glyphicon glyphicon-minus'><\/span> "+r.name+"<\/a><\/th><\/tr><tr class='table-header-row'><th>Key<\/th><th>Value<\/th><\/tr><\/thead><tbody>"),n.each(r.localizations,function(n,t){i.push("<tr><td>"+n+"<a href='javascript:;' class='btn-edit-loc'><span class='glyphicon glyphicon-pencil'><\/span><\/a><\/td><td>"+global.html.encode(t)+"<\/td><\/tr>")}),i.push("<\/tbody><\/table>"))});r.append(i.join(""));o();e()}function u(){var t=[];localizations&&pageLocalizations&&Array.isArray(localizations)&&Array.isArray(pageLocalizations)&&(n.each(pageLocalizations,function(r,u){var f=_.find(localizations,{name:u}),e;f&&f.localizations&&typeof f.localizations=="object"&&(e={},n.each(f.localizations,function(t,r){var u=r.replace(/<\/{0,1}\w+[^>]*>/g,""),f=n('body:contains("'+u+'")');i(f)&&(e[t]=r)}),Object.keys(e).length>0&&t.push({name:u,localizations:e}))}),r(t),s(),f(),window.currentLocalizations=t)}function f(){var t=n("#linkCurrentEdit");t.unbind("click");t.click(function(){var u=n(".loc-updated"),t={},i,r;u.each(function(n,i){var u=i.previousSibling.innerText,f=i.innerText,r=i.closest("table").getElementsByClassName("table-name")[0].innerText.trim();typeof t[r]=="undefined"&&(t[r]={});t[r][u]=f});i=[];n.each(t,function(n,t){i.push({name:n,localizations:t})});r=n("#linkCurrentLocale").data("locale");n.ajax({url:"/api/localizations/edit?language="+r,type:"POST",dataType:"json",cache:!1,contentType:"application/json",data:JSON.stringify(i),success:function(n){n!=null&&n!=""&&window.open(location.origin+"/api/localizations/edit/"+n)},error:function(n,t,i){console.log(i)}})})}function e(){var t=n(".btn-edit-loc");t.unbind("click");t.click(function(){var r=n(this).closest("td"),f=r.text(),t=r.next(),u=t.text(),i=prompt("Edit the value for key: "+f,u);i!=null&&i!=u&&(t.text(i),t.addClass("loc-updated"),n("#linkCurrentEdit").show())})}function o(){var r=n("a.toggle-locs-menu"),t,i;r.unbind("click");r.click(function(){n(this).closest("table").toggleClass("table-locs-collapse")});t=n("a.top-menu-expand-all");t.unbind("click");t.click(function(){n(".nav-container--locs .table-locs").removeClass("table-locs-collapse")});i=n("a.top-menu-collapse-all");i.unbind("click");i.click(function(){n(".nav-container--locs .table-locs").addClass("table-locs-collapse")})}function s(){var t=n(".toggleLocsMenu");t.unbind("click");t.click(function(){n(this).closest(".nav-container--locs").toggleClass("full-size")})}n(document).ready(function(){setTimeout(t,1e3)})}(jQuery),function(n){function r(n){return new Promise(function(t,i){var r=new FileReader;r.onloadend=function(i){t(i.target.result,n)};r.onerror=function(n){i(n.target.error)};r.readAsArrayBuffer(n)})}var u={maxFilesize:1e6},t={},f=function(i){t=n.extend({},u,i);typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1&&(Dropzone.prototype.submitRequest=function(i,u,f){n.each(f,function(u,f){if(f.size>t.maxFilesize)r(f).then(function(t){var r=new JSZip;r.file(f.name,t,{binary:!0});r.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}).then(function(t){var r=new FormData;return n(".hidden-attr").each(function(n,t){r.append(t.name,t.value)}),r.append("file",t,f.name+".zip"),i.send(r)})});else{var e=new FormData;return n(".hidden-attr").each(function(n,t){e.append(t.name,t.value)}),e.append("file",f,f.name),i.send(e)}})})},e=function(n){return n.size<=t.maxFilesize},o=function(n){return new Promise(function(i){n.size<=t.maxFilesize?i({isNotTooBig:!0,finalFilesize:n.size}):r(n).then(function(r){var u=new JSZip;u.file(n.name,r,{binary:!0});u.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}).then(function(n){i({isNotTooBig:n.size<=t.maxFilesize,finalFilesize:n.size})})})})},i={};i.init=f;i.fileIsNotTooBig=e;i.fileIsNotTooBigAsync=o;window.dropzoneTools=i}(jQuery)