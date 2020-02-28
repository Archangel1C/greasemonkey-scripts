// ==UserScript==
// @name            Facebook.mbasic: Adjust Event Details Width
// @description     The width of the event details area on mbasic.facebook.com is often stretched way over the screen size. This aims to fix it, to be able to read the event description without scrolling.
// @author          Archangel1C
// @license         GPL-3.0-only
// @namespace       https://github.com/Archangel1C
// @version         0.1
// @match           http*://mbasic.facebook.com/events/*
// @run-at          document-end
// @grant           none
// @compatible      chrome
// @contributionURL https://flattr.com/@Archangel1C
// ==/UserScript==
//
// Sources/Influences:
// - ...

(function adjustEventDetailsWidth() {
    'use strict';

	let body = document.querySelector('body');
	let divEventTabs = document.querySelector('div#event_tabs');
	divEventTabs.style.width = body.clientWidth + 'px';
})();
