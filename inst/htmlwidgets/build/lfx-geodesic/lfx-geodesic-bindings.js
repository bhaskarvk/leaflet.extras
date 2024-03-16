(()=>{function t(t){return t?void 0===t.index?t:(t.data=asArray(t.data),t.index=asArray(t.index),$.map(t.index,(function(e,n){return t.data[e]}))):t}function e(t,e,n,o,a,i,r){n.showStats&&r(i);var l=o.get(a,"group");if(HTMLWidgets.shinyMode){let n=t.target.getLatLng?t.target.getLatLng():t.latlng;if(n){const t=L.latLng(n);n={lat:t.lat,lng:t.lng}}const r=$.extend({id:o.get(a,"layerId"),".nonce":Math.random()},null!==l?{group:l}:null,n,i);Shiny.onInputChange(map.id+e,r)}}LeafletWidget.methods.addGeodesicPolylines=function(t,e,n,o,a,i,r,l,s,c,d,g){if(t.length>0){const m=this;var h;console.log("START"),console.log(t),o.showStats&&((h=L.control()).onAdd=function(t){return this._div=L.DomUtil.create("div","info"),this._div},h.addTo(m)),(h=L.control()).onAdd=function(t){return this._div=L.DomUtil.create("div","info"),this._div},h.addTo(m),h.update=function(t){const e=t.totalDistance?t.totalDistance>1e4?(t.totalDistance/1e3).toFixed(0)+" km":t.totalDistance.toFixed(0)+" m":"invalid";this._div.innerHTML="<h4>Statistics</h4><b>totalDistance</b><br/>"+e+"<br/><br/><b>Points</b><br/>"+t.points+"<br/><br/><b>Vertices</b><br/>"+t.vertices};const y=t.map((t=>t[0].flatMap((t=>t.lat.map(((e,n)=>({lat:e,lng:t.lng[n]}))))))),v=L.geodesic(y,o);h.update(v.statistics),m.layerManager.addLayer(v,"shape",null,n,null,null);var u=[];function p(){const t=[];for(const e of u){const n=[];for(const t of e)n.push(t.getLatLng());t.push(n)}v.setLatLngs(t),h.update(v.statistics)}for(const w of y){var f=[];for(const A of w){var b=L.marker(A,{draggable:!0}).addTo(m);m.on("layeradd",(function(t){t.layer===v&&m.layerManager.addLayer(b,"marker","fake_layerid",n,null,null)})),m.on("layerremove",(function(t){t.layer===v&&m.layerManager.removeLayer("marker","fake_layerid")})),b.on("drag",(t=>{p()})),f.push(b)}u.push(f)}}},LeafletWidget.methods.addLatLng=function(t){console.log("addLatLng"),console.log(addLatLng),this.geodesic?this.geodesic.addLatLng(t):console.error("Geodesic object is not initialized.")},LeafletWidget.methods.addGreatCircles=function(n,o,a,i,r,l,s,c,d,g,h,u,p){if(!$.isEmptyObject(n)&&!$.isEmptyObject(o)||$.isNumeric(n)&&$.isNumeric(o)){const m=this;let y,v;s&&(s.iconUrl=t(s.iconUrl),s.iconRetinaUrl=t(s.iconRetinaUrl),s.shadowUrl=t(s.shadowUrl),s.shadowRetinaUrl=t(s.shadowRetinaUrl),y=(new LeafletWidget.DataFrame).cbind(s),v=function(t){const e=y.get(t);return e.iconUrl?(e.iconWidth&&(e.iconSize=[e.iconWidth,e.iconHeight]),e.shadowWidth&&(e.shadowSize=[e.shadowWidth,e.shadowHeight]),e.iconAnchorX&&(e.iconAnchor=[e.iconAnchorX,e.iconAnchorY]),e.shadowAnchorX&&(e.shadowAnchor=[e.shadowAnchorX,e.shadowAnchorY]),e.popupAnchorX&&(e.popupAnchor=[e.popupAnchorX,e.popupAnchorY]),new L.Icon(e)):new L.Icon.Default}),s&&(y.effectiveLength=n.length);const w=(new LeafletWidget.DataFrame).col("lat",n).col("lng",o).col("radius",a).col("layerId",i).col("group",r).col("popup",c).col("popupOptions",d).col("label",g).col("labelOptions",h).col("highlightOptions",u).col("markerOptions",p).cbind(l);if(l.showStats){var f=L.control();function b(t,e){var n="";n="function"==typeof l.statsFunction?l.statsFunction(t):"<h4>Statistics</h4><b>Total Distance</b><br/>"+(t.totalDistance?t.totalDistance>1e4?(t.totalDistance/1e3).toFixed(0)+" km":t.totalDistance.toFixed(0)+" m":"invalid")+"<br/><br/><b>Points</b><br/>"+t.points+"<br/><br/><b>Vertices</b><br/>"+t.vertices,f._div.innerHTML=n}f.onAdd=function(t){return this._div=L.DomUtil.create("div","info"),this._div},f.addTo(m)}LeafletWidget.methods.addGenericLayers(this,"shape",w,(function(t,n){var o=t.get(n);const a=new L.LatLng(t.get(n,"lat"),t.get(n,"lng")),i=new L.GeodesicCircle(a,o);if(o.showCenter){p=p||{},o.showCenter&&s&&(p.icon=v(n));const r=L.marker(a,p);null!==g&&(null!==h?r.bindTooltip(t.get(n,"label"),h):r.bindTooltip(t.get(n,"label"))),null!==c&&(null!==d?r.bindPopup(t.get(n,"popup"),d):r.bindPopup(t.get(n,"popup"))),m.on("layeradd",(function(e){e.layer===i&&m.layerManager.addLayer(r,"marker",t.get(n,"layerId"),t.get(n,"group"),null,null)})),m.on("layerremove",(function(e){e.layer===i&&m.layerManager.removeLayer("marker",t.get(n,"layerId"))})),r.on("drag",(a=>{i.setLatLng(a.latlng),e(a,"_geodesic_stats",o,t,n,i.statistics,b)})),r.on("click",(a=>{e(a,"_geodesic_click",o,t,n,i.statistics,b)}))}return i.on("click",(a=>{e(a,"_geodesic_click",o,t,n,i.statistics,b)})),i.on("mouseover",(a=>{e(a,"_geodesic_mouseover",o,t,n,i.statistics,b)})),i}))}}})();