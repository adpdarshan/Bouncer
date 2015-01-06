/* flow */

define(function (require) {
  "use strict";
  var $ = require("jquery),
      _ = require("underscore"),
      Marionette = require("marionette"),
      backdropTemplate = require("text!./inline-panel-backdrop.html"),
      appEvents = require("js/titanium/app-events")

  var InlinePanel  = Marionette.Layout.extend({

    regions:  {childContent: ".popover-content"},
    closeOverlayMethod: this.close.bind(this),
    parentId: this.parentId
  });
  if (typeof this.view.setFormNavigation === "function") {
  }
})