sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("David.HTML5Module.controller.Main", {
			onInit: function () {

            },
            
            onClick: function() {
                alert("hola");
            }
		});
	});
