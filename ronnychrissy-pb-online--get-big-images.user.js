// ==UserScript==
// @name            ronnychrissy.pb.online - get big images
// @description     print the URLs of the big images on the console
// @author          Archangel1C
// @license         GPL-3.0-only
// @namespace       https://github.com/Archangel1C
// @version         0.1
// @match           http*://ronnychrissy.pb.online/*
// @run-at          document-end
// @grant           none
// @compatible      chrome
// @contributionURL https://flattr.com/@Archangel1C
// ==/UserScript==
//
// Sources/Influences:
// - ...

(function getBigImageURLs() {
    // debugger instruction lets Chrome stop here
    //  debugger;

    // https://www.w3schools.com/js/js_strict.asp
    // https://stackoverflow.com/a/1335881/4423698
    'use strict';

    var lazyImages = document.querySelectorAll('.lazy-img');
    if(lazyImages == null) {
        console.log('no lazy images found');
        return;
    }
    let fConvertUrls = e => {
        var baseUrl = e.src.valueOf();
        var bigUrl = baseUrl.replace('w400', 'w1000');
        console.log(`${baseUrl} -> ${bigUrl}`);
    };
    lazyImages.forEach(fConvertUrls);

})();
