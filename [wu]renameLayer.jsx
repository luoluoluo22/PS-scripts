﻿// written by Lukasz Wieczorek at http://lukasz.io// Please do not remove this and give credit if you repost. Thanks!/*<javascriptresource> <name>Get Master Parent</name><category>Lukasz Wieczorek Plugins</category></javascriptresource>*/var docRef  = app.activeDocument;var currentName = docRef.activeLayer.name;var myName=prompt("new name of layer",currentName);var layerLength = app.activeDocument.layers.length;docRef.activeLayer.name = myName;