require([
	"esri/Map", 
	"esri/views/MapView", // change the MapeView to SceneView if 3D view is needed
	"esri/layers/TileLayer", // to add layer(s)
	"dojo/dom",  // require dojo/dom for getting the DOM element
    "dojo/on",   // require dojo/on for listening to events on the DOM
	"dojo/domReady!"
], function(Map, MapView, TileLayer, dom, on){
	// set up a basemap
 	var map = new Map({
 		// https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html  <-- choose the most appropriate basemap for project
    	basemap: "gray"
  	});
 	// MapView for 2D & SceneView for 3D
  	var view = new MapView({
    	container: "base-view-map",  
    	map: map,
    	zoom: 4,
    	// by default center of US will be displayed
    	// first value = long & second value = lat
    	center: [-98, 40]        
  	});
  	// TileLayer creates layer(s) that will be displayed on the map
  	// url property is a must property
  	// extra properties can be added as needed (id, minScale, maxScale, opacity, and visible)
  	var springTornadoLyr = new TileLayer({
		url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Spring_Tornado_Warnings/MapServer",
		visible: false
    });

    var summerTornadoLyr = new TileLayer({
		url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Summer_Tornado_Warnings/MapServer",
		visible: false
    });

  	var fallTornadoLyr = new TileLayer({
		url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Fall_Tornado_Warnings/MapServer",
		visible: false
    });

    var winterTornadoLyr = new TileLayer({
    	url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Winter_Tornado_Warnings/MapServer",
    	visible: false
    });

    var stormLyr = new TileLayer({
    	url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Storm_Warnings_and_Advisories_from_2002-2011/MapServer",
    	visible: false
    });
    // add layer(s) to the basemap
  	map.add(springTornadoLyr);
  	map.add(summerTornadoLyr);
  	map.add(fallTornadoLyr);
  	map.add(winterTornadoLyr);
  	map.add(stormLyr);
  	//set up a toggle function
  	var springLayerToggle = dom.byId("spring-layer");
  	on(springLayerToggle, "change", function(){
		springTornadoLyr.visible = springLayerToggle.checked;
    });

    var summerLayerToggle = dom.byId("summer-layer");
  	on(summerLayerToggle, "change", function(){
		summerTornadoLyr.visible = summerLayerToggle.checked;
    });

    var fallLayerToggle = dom.byId("fall-layer");
  	on(fallLayerToggle, "change", function(){
		fallTornadoLyr.visible = fallLayerToggle.checked;
    });

    var winterLayerToggle = dom.byId("winter-layer");
  	on(winterLayerToggle, "change", function(){
		winterTornadoLyr.visible = winterLayerToggle.checked;
    });

    var stormLayerToggle = dom.byId("storm-layer");
  	on(stormLayerToggle, "change", function(){
		stormLyr.visible = stormLayerToggle.checked;
    });
});
