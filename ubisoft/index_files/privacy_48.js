tc_privacy_used = typeof tc_privacy_used != 'undefined' ? tc_privacy_used : 0;if(tc_privacy_used=='0'){/*										    
 * tagContainer Privacy v2.5						
 * Copyright Tag Commander						
 * http://www.tagcommander.com/					
 * Generated: 16/12/2019 21:53:28             
 * ---                                         	
 * Version   : 006                   	
 * IDP       : 48                   	
 * IDS       : 3485              	
 */

tC.privacyVersion='006';
tC.privacyID=48;
/*!compressed by YUI*/ try{tC.privacy.document=top.document}catch(e){tC.privacy.document=document}tC.privacy.catBlockPH=0;tC.privacy.getCS=tC.privacy.getCS||function(){return typeof tC.privacyCookieSeparator!=="undefined"?tC.privacyCookieSeparator:"@@@"};tC.privacy.showPrivacy=function(){var s=tC.privacy.document,E=tC.getCookie(tC.privacy.getCN()),w=E.indexOf("@@@")>=0?E.split("@@@"):E.split(tC.privacy.getCS()),m="",b=48,h="006",p=s.getElementById("tc_div_preview"),g=p?p:s.body,u=[{id:55,label:"ADS",id_privacy:48,categoryParent:-1,position:0,description:"Do you accept cookies being deposited and read in order to analyse your interests and offer personalised advertisements?",isUsedInTarget:false,subCategories:null,tagsId:[]},{id:56,label:"ANALYTICS",id_privacy:48,categoryParent:-1,position:1,description:"Do you accept cookies being deposited and read in order to allow us to measure the audience of our website?",isUsedInTarget:false,subCategories:null,tagsId:[]}];if(s.getElementById("footer_tc_privacy")){s.getElementById("footer_tc_privacy").style.display="block";return}if(w.length<=2||(m!=""&&w[1]!=m)){}else{return}tC.privacy.hitCounter(48);var o='<p class="tc_privacy_text"><span> <img src="https://ubistatic2-a.akamaihd.net/emea/tagcommander/js/Monochrome_Institutional_Black_CMYK.png" width="70" /> </span> By continuing to navigate on this site, you accept the use of cookies by Ubisoft and its partners to offer advertising adapted to your interests, collect visit statistics and allow you to use the social network share buttons.&nbsp;<a href="https://legal.ubi.com/privacypolicy/" title="Legal">To learn more </a> and <a href="#" onclick="tC.privacyCenter.showPrivacyCenter();PrivacyCallback();return false">set your cookies.</a></p>',j="#ffffff",A="#333333",z="OK",c="#6faae5",D="#ffffff",r="optin",f="Refuse",v="#6faae5",y="#FFFFFF",n="optout",a="0",q=s.createElement("div"),x=s.createElement("div"),d=s.createElement("button");dom_button_2=s.createElement("button");dom_container_button=s.createElement("div");dom_container_text=s.createElement("div");dom_style=s.createElement("style");q.id="footer_tc_privacy";dom_container_button.id="footer_tc_privacy_container_button";dom_container_text.id="footer_tc_privacy_container_text";d.id="footer_tc_privacy_button";dom_button_2.id="footer_tc_privacy_button_2";x.id="footer_tc_privacy_text";function B(){var F=s.getElementById("footer_tc_privacy");g.removeChild(F)}function C(){var H=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null;var I=[];for(var G=0;G<u.length;G++){I.push(u[G].id);if(u[G].subCategories){for(var F=0;F<u[G].subCategories.length;F++){I.push(u[G].subCategories[F].id)}}}tC.setCookie(tC.privacy.getCN()+"_categories",I.join(","),365,"/",H)}function k(){C();if(r=="optout"){tC.privacy.Out(b,h,"ALL")}else{tC.privacy.In(b,h,"ALL")}B();if(typeof window.tc_closePrivacyButton==="function"){window.tc_closePrivacyButton()}}function t(){C();if(n=="optout"){tC.privacy.Out(b,h,"ALL")}else{tC.privacy.In(b,h,"ALL")}B();if(typeof window.tc_closePrivacyButton==="function"){window.tc_closePrivacyButton()}}tC(q).resetCss().css({width:"100%",background:A,position:p?"absolute":"fixed",zIndex:p?"1":"999998",bottom:"0",left:"0",textAlign:"left",opacity:0.9});tC(dom_container_button).resetCss().css({right:"10px",display:"inline-block"});tC(d).resetCss().css({color:D,background:c,display:"block",cursor:"pointer",fontSize:"12px",padding:"5px 10px",margin:"10px 0"});tC(dom_button_2).resetCss().css({color:y,background:v,display:"block",cursor:"pointer",fontSize:"12px",padding:"5px 10px"});tC(dom_container_text).resetCss().css({display:"inline-block"});tC(x).resetCss().css({color:j,padding:"10px 10px 10px 10px",fontSize:"12px",textAlign:"left"});x.innerHTML=o;d.innerHTML=z;dom_button_2.innerHTML=f;if(d.addEventListener){d.addEventListener("click",function(F){k()},true)}else{if(d.attachEvent){d.attachEvent("onclick",function(F){k()})}}if(dom_button_2.addEventListener){dom_button_2.addEventListener("click",function(F){t()},true)}else{if(dom_button_2.attachEvent){dom_button_2.attachEvent("onclick",function(F){t()})}}if(a=="1"){dom_container_button.appendChild(dom_button_2)}dom_container_button.appendChild(d);dom_container_text.appendChild(x);q.appendChild(dom_container_text);q.appendChild(dom_container_button);g.appendChild(q);if(typeof window.tc_showPrivacy==="function"){window.tc_showPrivacy()}dom_style.type="text/css";var l="#footer_tc_privacy_container_text{width:79%;display:inline-block;}#footer_tc_privacy_container_button,#footer_tc_privacy_container_text{vertical-align:middle;}#footer_tc_privacy_container_button{width:19%;display:inline-block;}#footer_tc_privacy_button, #footer_tc_privacy_button_2{float: right;}#footer_tc_privacy_button_2{margin: 10px 0px 10px 10px;}@media(max-width: 767px){#footer_tc_privacy_button_2{margin:10px 0;}}@media(min-width: 768px) and (max-width: 979px){#footer_tc_privacy_container_text{width:69%;}#footer_tc_privacy_container_button{width:29%;}}@media(max-width: 767px)   {#footer_tc_privacy_container_text{width:100%;}#footer_tc_privacy_container_button{width:100%;}#footer_tc_privacy_button, #footer_tc_privacy_button_2{margin:0 0 0 0;float: none;width:100%;}}";if(dom_style.styleSheet){dom_style.styleSheet.cssText=l}else{dom_style.appendChild(s.createTextNode(l))}[].map.call(s.querySelectorAll("#footer_tc_privacy"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="background:none repeat scroll 0 0 rgba(20,16,16,0.8);bottom:0;left:0;position:fixed;width:80%;z-index:100000;margin:0 0 0 10%;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("#footer_tc_privacy_button"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="background:none repeat scroll 0 0 #EEEEEE;max-width:40px;border:1px solid #AAAAAA;bottom:21px;cursor:pointer;display:block;font-size:11px;position:absolute;margin:10px 0 10px 0;right:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;color:#000000;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("#footer_tc_privacy_container_text"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="border:none;background:none;display:inline-block;width:93%;margin:auto;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("#footer_tc_privacy_container_button"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="border:none;background:none;display:inline-block;width:7%;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("p.tc_privacy_text"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="clear:both;color:#ffffff;font-size:13px;font-weight:normal;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:1.5;display:inline-block;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("p.tc_privacy_text a:link"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="color:#FFFFFF;text-decoration:underline;text-transform:initial;";F.setAttribute("style",G)});[].map.call(s.querySelectorAll("p.tc_privacy_text span"),function(F){var G=F.getAttribute("style");if(!G||typeof G==="undefined"){G=""}if(G.length>0&&G.slice(-1)!=";"){G+=";"}G+="float:left;margin:0 10px 0 0;";F.setAttribute("style",G)});var i=s.getElementsByTagName("head")[0];i.appendChild(dom_style)};tC.privacyCenter={};tC.privacyCenter.showPrivacyCenter=function(){var a=tC.privacy.document,b=tC.privacy.getContainer(a),d=a.getElementById("tc_div_preview"),c={id:48,version:"006",reactived:"",headerContent:"Ubisoft - Set your cookies.",headerBgColor:"#3A3C4A",headerColor:"#FFFFFF",bodyContent:"<p>When you surf on our website, certain information may be saved to or read from your terminal, based on your choices.</p>",bodyBgColor:"#333333",bodyColor:"#ffffff",btContent:"OK",btBgColor:"#AAAAAA",btColor:"#ffffff",actionType:"optin",categories:[{id:55,label:"ADS",id_privacy:48,categoryParent:-1,position:0,description:"Do you accept cookies being deposited and read in order to analyse your interests and offer personalised advertisements?",isUsedInTarget:false,subCategories:null,tagsId:[]},{id:56,label:"ANALYTICS",id_privacy:48,categoryParent:-1,position:1,description:"Do you accept cookies being deposited and read in order to allow us to measure the audience of our website?",isUsedInTarget:false,subCategories:null,tagsId:[]}],categoriesEnabled:tC.privacy.categories,sizes:{width:2000,height:860},labelBtOn:"On",labelBtOff:"Off",labelYesForAll:"On for all",labelNoForAll:"Off for all",defaultConfig:tC.privacy.cookieData?false:true};tC.privacy.set(c);tC.unique=function(g){var k={},h,f=g.length,j=[];for(h=0;h<f;h++){k[g[h]]=g[h]}for(h in k){j.push(k[h])}return j};tC.privacy.resize=function(j,f){var h=a.getElementById("privacy-overlay"),g=a.getElementById("privacy-container"),i=a.getElementById("privacy-iframe"),k=tC.privacy.getContainerSizes(),j=j||k.width,f=f||k.height;tC.privacy.settings.sizes=k;h.style.width=parseInt(j)+"px";h.style.height=parseInt(f)+"px";g.style.width=parseInt(j)+"px";g.style.height=(parseInt(f)-10)+"px";i.contentWindow.postMessage(tC.JSON.stringify({type:"resize",width:k.width,height:k.height}),"*")};tC.privacy.close=function(f){a.getElementById("privacy-overlay").style.display="none";a.getElementById("privacy-container").style.display="none";if(typeof window.tc_closePrivacyCenter==="function"){window.tc_closePrivacyCenter(f)}};tC.privacy.setCat=function(n){var k=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null,m=[];for(var i in n.categories){for(var h in this.settings.categories){var j=this.settings.categories[h];if(j){if(j.id===parseInt(n.categories[i])){if(j.tagsId){m=m.concat(j.tagsId)}}if(j.subCategories){for(var g in j.subCategories){var l=j.subCategories[g];if(parseInt(l.id)===parseInt(n.categories[i])){if(l.tagsId){m=m.concat(l.tagsId)}}}}}}}tC.setCookie(tC.privacy.getCN()+"_categories",n.categories.join(","),365,"/",k);this.In(n.idPrivacy,n.version,m.join("|"));tC.privacy.close("save");a.getElementById("footer_tc_privacy").style.display="none"};tC.privacy.getContainerSizes=function(){var l=a.getElementById("tc_div_preview");if(l){var i=l.offsetWidth;f=l.offsetHeight}else{var h=window,m=a,k=m.documentElement,j=m.getElementsByTagName("body")[0],i=h.innerWidth||k.clientWidth||j.clientWidth,f=h.innerHeight||k.clientHeight||j.clientHeight}return{width:i,height:f}};tC.privacy.winResize=function(){if(!tC.privacy.onResize){tC.privacy.onResize=true;setTimeout(function(){tC.privacy.onResize=false;var h=tC.privacy.getContainerSizes(),g=h.width,f=h.height;tC.privacy.resize(g,f)},200)}};tC.privacy.loadedIframe=function(){if(window.addEventListener){window.addEventListener("resize",tC.privacy.winResize,false)}else{window.attachEvent("resize",tC.privacy.winResize)}tC.privacyCenter.showPrivacyCenter()};tC.privacyCenter.showPrivacyCenter=function(){var g=a.getElementById("privacy-overlay"),f=a.getElementById("privacy-container");g.style.display="block";f.style.display="block";tC.privacy.winResize();if(typeof window.tc_showPrivacyCenter==="function"){window.tc_showPrivacyCenter()}};tC.privacy.initPrivacyCenter=function(){if(tC.privacy.privacyCenterIsInitialized){tC.privacyCenter.showPrivacyCenter()}else{tC.privacy.privacyCenterIsInitialized=true;var i=a.createElement("div"),g=a.createElement("div"),j=a.createElement("iframe");i.id="privacy-overlay";g.id="privacy-container";j.id="privacy-iframe";tC(i).resetCss().css({background:"rgba(0,0,0,0.5)",position:"fixed",width:"100%",height:"100%",top:"0",left:"0",zIndex:d?"1":"999999",display:"none"});tC(g).resetCss().css({position:"fixed",width:"100%",height:"100%",top:"0",left:"0",zIndex:d?"1":"999999",display:"none"});tC(j).resetCss().css({width:"100%",height:"100%"});var k=window.addEventListener?"addEventListener":"attachEvent",h=window[k],f=k=="attachEvent"?"onmessage":"message";h(f,function(q){try{tC.log(q.data);var p=typeof q.data!=="object"?tC.JSON.parse(q.data):q.data;var n=p.type||null;if(n=="ready"){tC.privacy.settings.sizes=tC.privacy.getContainerSizes();j.contentWindow.postMessage(tC.JSON.stringify({type:"init",data:tC.privacy.settings}),"*");var r={".modal-content":{color:"#ffffff","font-weight":"normal","font-family":"Verdana, Geneva, Arial, Helvetica, sans-serif"}};j.contentWindow.postMessage(tC.JSON.stringify({type:"addCss",JsonFromCSS:r}),"*")}else{if(typeof tC.privacy[p.functionName]=="function"){if(p.params==""){tC.privacy[p.functionName]()}else{try{tC.privacy[p.functionName](JSON.parse(p.params))}catch(o){}}}}}catch(q){}},false);b.appendChild(i);g.appendChild(j);b.appendChild(g);var l=new Date();var m=l.getTime();j.src="https://cdn.tagcommander.com/privacy/template/index.htm"}};if(typeof JSON!=="object"){tC.script.add("https://cdn.tagcommander.com/privacy/template/tC.json.js",function(){tC.privacy.initPrivacyCenter()})}else{tC.JSON=JSON;tC.privacy.initPrivacyCenter()}};tC.privacy.showPrivacyCenter=tC.privacyCenter.showPrivacyCenter;tc_privacy_used=1;tC.privacy.showPrivacy();}