// @ts-ignore
// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     *  @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {
             metadata: {
                 manifest : "json"
            //     "rootView": {
            //         "viewName": "logaligroup.SAPUI5.view.App",
            //         "type": "XML",
            //         "async": true,
            //         "id": "app"
            //     }
            },
        init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on the view
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                this._HelloDialog = new HelloDialog(this.getRootControl());
            },
        exit: function (){
            this._HelloDialog.destroy();
            delete this._HelloDialog;
        },
        openHelloDialog: function (){
            this._HelloDialog.open();
        }
        })
    });