﻿// Select all layers you want to put mask on// Make a working path in paths named"Work Path"/*<javascriptresource> <name>Get Master Parent</name><category>Lukasz Wieczorek Plugins</category></javascriptresource>*/var docRef = app.activeDocument;runScript();function runScript(){    cTID = function(s) { return app.charIDToTypeID(s); };    sTID = function(s) { return app.stringIDToTypeID(s); };    function newGroupFromLayers(docRef) {        var desc = new ActionDescriptor();        var ref = new ActionReference();        ref.putClass( sTID('layerSection') );        desc.putReference( cTID('null'), ref );        var lref = new ActionReference();        lref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );        desc.putReference( cTID('From'), lref);        executeAction( cTID('Mk  '), desc, DialogModes.NO );    };    function undo() {       executeAction(cTID("undo", undefined, DialogModes.NO));    };    function getSelectedLayers(docRef) {      var selLayers = [];      newGroupFromLayers();      var group = docRef.activeLayer;      var layers = group.layers;      for (var i = 0; i < layers.length; i++) {        selLayers.push(layers[i]);      }      undo();      return selLayers;    };    var selectedLayers = getSelectedLayers(app.activeDocument);    for( i = 0; i < selectedLayers.length; i++) {        var numberLayers = app.activeDocument.layers.length        app.activeDocument.activeLayer  = app.activeDocument.layers[numberLayers-1];        docRef.activeLayer = selectedLayers[i];                //rename string/layer         var newName = reformatLayername(app.activeDocument.activeLayer.name);        app.activeDocument.activeLayer.name = newName;        var currentAciveLayer = app.activeDocument.activeLayer;                //make text        var layerRef = app.activeDocument.artLayers.getByName("template");        var newLayer = layerRef.duplicate();        newLayer.name = newName;        newLayer.textItem.contents = newName;        newLayer.move(currentAciveLayer, ElementPlacement.PLACEBEFORE);                //make BG        var BGlayerRef = app.activeDocument.artLayers.getByName("textBG");        var newBGLayer = BGlayerRef.duplicate();        newBGLayer.move(currentAciveLayer, ElementPlacement.PLACEBEFORE);                //group layers         var newLayerSet = app.activeDocument.layerSets.add();           //move the layers into the layerset          currentAciveLayer.move(newLayerSet, ElementPlacement.INSIDE);        newBGLayer.move(newLayerSet, ElementPlacement.INSIDE);          newLayer.move(newLayerSet, ElementPlacement.INSIDE);     } }function reformatLayername(theLayerName) {    var theString = theLayerName;    var newString = theString.replace(/Plate_/g, '').replace(/,/g, '').replace(/plate_/g, '').replace(/Plate-/g, '').replace(/plate-/g, '').replace(/-/g, ' ').replace(/[^ a-zA-Z]+/g,'').replace(/edit/g, ' ').replace(/final/g, ' ');    return newString;}function makeTextLayer() {    }