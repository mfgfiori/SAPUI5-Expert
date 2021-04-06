// @ts-ignore
// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     *  @param {typeof sap.ui.core.UIComponent} UIComponent
     *  @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

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
                //var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                //set the device model
                this.setModel(Models.createDeviceModel(), "device");

                this._HelloDialog = new HelloDialog(this.getRootControl());

                //Create the views based on the url/hash
                this.getRouter().initialize();

            },
        exit: function (){
            this._HelloDialog.destroy();
            delete this._HelloDialog;
        },
        openHelloDialog: function (){
            this._HelloDialog.open();
        },

        getContentDensityClass: function() {
            if ( !Device.support.touch){
                this._sContentDensityClass = "sapUiSizeCompact";                
            } else {
                this._sContentDensityClass = "sapUiSizeCozy";                
            }
            return this._sContentDensityClass;
        }

        })
    });