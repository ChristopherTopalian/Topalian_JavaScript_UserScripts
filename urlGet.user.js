// ==UserScript==
// @name         urlGet
// @namespace    https://www.github.com/ChristopherTopalian/Topalian_JavaScript_UserScripts
// @version      1.0
// @description  gets the URL of the Webpage and shows it using alert and console.log
// @author       Christopher Topalian
// @match        http://*/*
// @match        https://*/*
// @icon         none
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    function urlGet()
    {
        let theURL = document.location;

        alert(theURL);

        console.log(theURL);
    }
    urlGet();
})();