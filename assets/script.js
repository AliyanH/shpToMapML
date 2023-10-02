function shpToMapML() {
	let files = parseFiles(document.getElementById("shpFile").files);
	let selectedSHPFile, selectedDBFFile;
	if (files) {
		selectedSHPFile = files.shp;
		selectedDBFFile = files.dbf
	} else {
		return;
	}
	console.log("Converting " + files.name + ".shp to " + files.name + ".mapml");

	// get the options being used for geojson2MapML
	let label = document.querySelector("#label").value,
		projection = document.querySelector("#projection").value,
		caption = document.querySelector("#caption").value,
		properties = document.querySelector("#properties").value
	let options = {}
	if (label) {
		options.label = label;
	} else {
		options.label = files.name;
	}
	if (projection) {
		options.projection = projection;
	}
	if (caption) {
		options.caption = caption;
	}
	if (properties) {
		options.properties = properties;
	}

	new Shapefile({
		shp: selectedSHPFile,
		dbf: selectedDBFFile
	}, function (data) {
		//console.log(data);
		let layer = document.querySelector("mapml-viewer").geojson2mapml(data.geojson, options);
		let div = document.createElement("div");
		div.innerHTML = "The converted layer (<b>" + options.label + "</b>) has <b>" + layer.querySelectorAll("map-feature").length + "</b> features.";
		document.body.appendChild(div);
	});

	// convert Shp to GeoJSON
	/* 			let starttime = +new Date,
					map = new OpenLayers.Map("map",{allOverlays: true}),
					parser = new OpenLayers.Format.GeoJSON(),
					vector = new OpenLayers.Layer.Vector("Converted"); */

	/* let shapefile = new Shapefile({
			shp: "./js-shapefile-to-geojson-master/testdata/world.shp",
			dbf: "./js-shapefile-to-geojson-master/testdata/world.dbf"
		}, function(data){
			console.log(data);
			let layer = document.querySelector("mapml-viewer").geojson2mapml(data.geojson, options);
			let div = document.createElement("div");
			div.innerHTML = "The converted layer (<b>" + options.label + "</b>) has <b>" + layer.querySelectorAll("map-feature").length + "</b> features.";
			document.body.appendChild(div);
		}); */
}


function parseFiles(files) {
	let shp, dbf;
	for (let i in Array.from(files)) {
		let fileEnding = files[i].name.slice(-3);
		if (fileEnding === "shp") {
			shp = files[i];
		} else if (fileEnding === "dbf") {
			dbf = files[i];
		}
	}
	if (shp && dbf) {
		return { shp: URL.createObjectURL(shp), dbf: URL.createObjectURL(dbf), name: shp.name.slice(0, -4) };
	} else if (shp) {
		return { shp: URL.createObjectURL(shp), name: shp.name.slice(0, -4) };
	} else {
		return false;
	}
}