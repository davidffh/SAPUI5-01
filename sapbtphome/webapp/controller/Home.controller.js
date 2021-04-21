sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("dfunez.sapbtphome.controller.Home", {
			onInit: function () {
                const BTPJsonmenu = new sap.ui.model.json.JSONModel();
                BTPJsonmenu.loadData("./localService/mock/BTPMenu.json");
                this.getView().setModel(BTPJsonmenu);
            }
		});
	});
