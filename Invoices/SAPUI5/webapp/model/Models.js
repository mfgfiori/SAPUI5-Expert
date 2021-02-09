//@ts-ignore
sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     *  @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";
        return {
            createRecipient:  () => {
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                return new JSONModel(oData);
            }
        }
    });