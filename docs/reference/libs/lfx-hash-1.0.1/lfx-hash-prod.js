(()=>{var t,a;t=window,a=function(){var a=t.documentMode;return"onhashchange"in t&&(void 0===a||a>7)}(),L.Hash=function(t){this.onHashChange=L.Util.bind(this.onHashChange,this),t&&this.init(t)},L.Hash.parseHash=function(t){0===t.indexOf("#")&&(t=t.substr(1));var a=t.split("/");if(3==a.length){var n=parseInt(a[0],10),s=parseFloat(a[1]),h=parseFloat(a[2]);return!(isNaN(n)||isNaN(s)||isNaN(h))&&{center:new L.LatLng(s,h),zoom:n}}return!1},L.Hash.formatHash=function(t){var a=t.getCenter(),n=t.getZoom(),s=Math.max(0,Math.ceil(Math.log(n)/Math.LN2));return"#"+[n,a.lat.toFixed(s),a.lng.toFixed(s)].join("/")},L.Hash.prototype={map:null,lastHash:null,parseHash:L.Hash.parseHash,formatHash:L.Hash.formatHash,init:function(t){this.map=t,this.lastHash=null,this.onHashChange(),this.isListening||this.startListening()},removeFrom:function(t){this.changeTimeout&&clearTimeout(this.changeTimeout),this.isListening&&this.stopListening(),this.map=null},onMapMove:function(){if(this.movingMap||!this.map._loaded)return!1;var t=this.formatHash(this.map);this.lastHash!=t&&(location.replace(t),this.lastHash=t)},movingMap:!1,update:function(){var t=location.hash;if(t!==this.lastHash){var a=this.parseHash(t);a?(this.movingMap=!0,this.map.setView(a.center,a.zoom),this.movingMap=!1):this.onMapMove(this.map)}},changeDefer:100,changeTimeout:null,onHashChange:function(){if(!this.changeTimeout){var t=this;this.changeTimeout=setTimeout((function(){t.update(),t.changeTimeout=null}),this.changeDefer)}},isListening:!1,hashChangeInterval:null,startListening:function(){this.map.on("moveend",this.onMapMove,this),a?L.DomEvent.addListener(t,"hashchange",this.onHashChange):(clearInterval(this.hashChangeInterval),this.hashChangeInterval=setInterval(this.onHashChange,50)),this.isListening=!0},stopListening:function(){this.map.off("moveend",this.onMapMove,this),a?L.DomEvent.removeListener(t,"hashchange",this.onHashChange):clearInterval(this.hashChangeInterval),this.isListening=!1}},L.hash=function(t){return new L.Hash(t)},L.Map.prototype.addHash=function(){this._hash=L.hash(this)},L.Map.prototype.removeHash=function(){this._hash.removeFrom()}})();
//# sourceMappingURL=lfx-hash-prod.js.map