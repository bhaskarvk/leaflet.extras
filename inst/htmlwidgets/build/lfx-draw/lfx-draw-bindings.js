!function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){LeafletWidget.methods.addDrawToolbar=function(e,t,r){(function(){var a,o=this;if(o.drawToolbar&&(o.drawToolbar.removeFrom(o),delete o.drawToobar),e){if(!(a=o.layerManager.getLayer("geojson",e)))throw"GeoJSON layer with ID "+e+" not Found";o._editableGeoJSONLayerId=e}else t||(t="editableFeatureGroup"),a=o.layerManager.getLayerGroup(t,!0),o._editableFeatureGroupName=t;if(r&&r.draw&&r.draw.marker&&r.draw.marker.markerIcon&&r.draw.marker.markerIconFunction&&(r.draw.marker.icon=r.draw.marker.markerIconFunction(r.draw.marker.markerIcon)),!$.isEmptyObject(r.edit)){var n={};r.edit.remove||(n.remove=!1),r.edit.edit?$.isEmptyObject(r.edit.selectedPathOptions)||(n.edit={},n.edit.selectedPathOptions=r.edit.selectedPathOptions):n.edit=!1,$.isEmptyObject(r.edit.poly)||(n.poly=r.edit.poly),n.featureGroup=a,r.edit=n}o.drawToolbar=new L.Control.Draw(r),o.drawToolbar.addTo(o),o.on(L.Draw.Event.DRAWSTART,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_start",{feature_type:e.layerType})}),o.on(L.Draw.Event.DRAWSTOP,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_stop",{feature_type:e.layerType})}),o.on(L.Draw.Event.CREATED,function(e){r.draw.singleFeature&&a.getLayers().length>0&&a.clearLayers();var t=e.layer;a.addLayer(t);var n=L.stamp(t);t.feature={type:"Feature",properties:{_leaflet_id:n,feature_type:e.layerType}},"function"==typeof t.getRadius&&(t.feature.properties.radius=t.getRadius()),HTMLWidgets.shinyMode&&(Shiny.onInputChange(o.id+"_draw_new_feature",t.toGeoJSON()),Shiny.onInputChange(o.id+"_draw_all_features",a.toGeoJSON()))}),o.on(L.Draw.Event.EDITSTART,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_editstart",!0)}),o.on(L.Draw.Event.EDITSTOP,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_editstop",!0)}),o.on(L.Draw.Event.EDITED,function(e){var t=e.layers;t.eachLayer(function(e){var t=L.stamp(e);e.feature||(e.feature={type:"Feature"}),e.feature.properties||(e.feature.properties={}),e.feature.properties._leaflet_id=t,e.feature.properties.layerId=e.options.layerId,"function"==typeof e.getRadius&&(e.feature.properties.radius=e.getRadius())}),HTMLWidgets.shinyMode&&(Shiny.onInputChange(o.id+"_draw_edited_features",t.toGeoJSON()),Shiny.onInputChange(o.id+"_draw_all_features",a.toGeoJSON()))}),o.on(L.Draw.Event.DELETESTART,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_deletestart",!0)}),o.on(L.Draw.Event.DELETESTOP,function(e){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_draw_deletestop",!0)}),o.on(L.Draw.Event.DELETED,function(e){var t=e.layers;t.eachLayer(function(e){var t=L.stamp(e);e.feature||(e.feature={type:"Feature"}),e.feature.properties||(e.feature.properties={}),e.feature.properties._leaflet_id=t,e.feature.properties.layerId=e.options.layerId,"function"==typeof e.getRadius&&(e.feature.properties.radius=e.getRadius())}),HTMLWidgets.shinyMode&&(Shiny.onInputChange(o.id+"_draw_deleted_features",t.toGeoJSON()),Shiny.onInputChange(o.id+"_draw_all_features",a.toGeoJSON()))})}).call(this)},LeafletWidget.methods.removeDrawToolbar=function(e){(function(){var t=this;(t.drawToolbar&&(t.drawToolbar.remove(t),delete t.drawToolbar),t._editableFeatureGroupName&&e)&&t.layerManager.getLayerGroup(t._editableFeatureGroupName,!1).clearLayers();t._editableFeatureGroupName=null,t._editableGeoJSONLayerId&&e&&t.layerManager.removeLayer("geojson",t._editableGeoJSONLayerId),t._editableGeoJSONLayerId=null}).call(this)},LeafletWidget.methods.getDrawnItems=function(){var e;return this._editableGeoJSONLayerId?e=this.layerManager.getLayer("geojson",this._editableGeoJSONLayerId):this._editableFeatureGroupName&&(e=this.layerManager.getLayerGroup(this._editableFeatureGroupName,!1)),e?e.toGeoJSON():null}}]);
//# sourceMappingURL=lfx-draw-bindings.js.map
