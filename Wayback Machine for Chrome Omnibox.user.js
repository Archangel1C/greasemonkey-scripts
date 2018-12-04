// ==UserScript==
// @name         Wayback Machine for Chrome Omnibox
// @namespace    https://github.com/Archangel1C
// @version      0.2
// @description  Revert the URL encoding of colons by Chrome %s replacement to make it work with Wayback Machines search
// @author       Archangel1C
// @match        http*://web.archive.org/web/*
// @grant        none
// ==/UserScript==
//
// Sources/Influences:
// - https://superuser.com/a/302179 for the JavaScript part
// - https://superuser.com/a/364060 for the GreaseMonkey part

(function() {
// debugger instruction lets Chrome stop here
//  debugger;

    // https://www.w3schools.com/js/js_strict.asp
    // https://stackoverflow.com/a/1335881/4423698
    'use strict';

    // avoid infinite recursion
    if(window.location.href.search(/%3A/gi) > -1) {
        window.location = window.location.href.replace(/%3A/gi, ":");
    }
})();
