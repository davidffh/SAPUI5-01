/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dfunez/sapbtphome/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
