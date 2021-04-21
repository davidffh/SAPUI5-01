
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {
        new ComponentContainer({
            name: "logaligroup.SAPUI5",
            settings: {
                id: "SAPUI5"
            },
            async: true
        }).placeAt("content");
    });    

// sap.ui.define([
//     "sap/ui/core/mvc/XMLView"
// ],
//     /**
//     * 
//     * @param {typeof sap.ui.core.XMLView} XMLView 
//     */
//     function (XMLView) {
//         XMLView.create({
//             viewName: "logaligroup.SAPUI5.view.App"
//         }).then(function (oView) {
//             oView.placeAt("content");
//         });
//     });