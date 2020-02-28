// ==UserScript==
// @name            Facebook.mbasic: Adjust Event Details Style
// @description     The width of the event details area on mbasic.facebook.com is often stretched way over the screen size and there might be a margin to the left. This aims to fix it, to be able to read the event description without scrolling.
// @author          Archangel1C
// @license         GPL-3.0-only
// @namespace       https://github.com/Archangel1C
// @version         0.2
// @match           http*://mbasic.facebook.com/events/*
// @run-at          document-end
// @grant           none
// @compatible      chrome
// @contributionURL https://flattr.com/@Archangel1C
// ==/UserScript==
//
// Sources/Influences:
// - ...

(function adjustEventDetailsStyle() {
    'use strict';

    const logPrefix = '[adjust-event-details-style]';

    let divViewport = document.querySelector('div#viewport');
    divViewport.style.margin = '0px';
    console.log(`${logPrefix} set viewport margin to [0px]`);

    let body = document.querySelector('body');
    let divEventTabs = document.querySelector('div#event_tabs');
    let adjustedWidth = body.clientWidth + 'px';
    divEventTabs.style.width = adjustedWidth;
    console.log(`${logPrefix} event details width adjusted to [${adjustedWidth}]`);

})();
