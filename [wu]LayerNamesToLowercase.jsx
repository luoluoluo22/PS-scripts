﻿// written by Lukasz Wieczorek at http://lukasz.io// Please do not remove this and give credit if you repost. Thanks!/*<javascriptresource> <name>Get Master Parent</name><category>Lukasz Wieczorek Plugins</category></javascriptresource>*/var layerLength = app.activeDocument.layers.length;var docRef  = app.activeDocument;for(i = 0; i < layerLength; i++){   docRef.activeLayer = docRef.layers[i]   var myName = app.activeDocument.activeLayer.name;    var newName = myName.toLowerCase();    docRef.activeLayer.name = newName; }