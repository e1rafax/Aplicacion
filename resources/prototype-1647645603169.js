function initData() {
  jimData.variables["Nombre de usuario"] = "";
  jimData.variables["Email"] = "";
  jimData.variables["Nombre completo"] = "";
  jimData.isInitialized = true;
}(function(window, undefined) {
  var dictionary = {
    "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d": "Usuario",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("click", ".s-6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Circle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-menu_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Black-cover" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Black-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_33" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre de usuario"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_34" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre completo"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_35" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Email"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_36" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre de usuario"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-Image_9", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_9", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_9"]; 

	widgets.descriptionMap[["s-Image_10", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_10", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_10"]; 

	widgets.descriptionMap[["s-Image_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_11"]; 

	widgets.descriptionMap[["s-Image_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_12"]; 

	widgets.descriptionMap[["s-Text_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_2"]; 

	widgets.descriptionMap[["s-Text_3", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_3", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_3"]; 

	widgets.descriptionMap[["s-Text_4", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_4", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_4"]; 

	widgets.descriptionMap[["s-Text_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_5"]; 

	widgets.descriptionMap[["s-Text_6", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_6", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_6"]; 

	widgets.descriptionMap[["s-Text_10", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_10", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_10"]; 

	widgets.descriptionMap[["s-Text_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_11"]; 

	widgets.descriptionMap[["s-Text_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_12"]; 

	widgets.descriptionMap[["s-Text_13", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_13", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_13"]; 

	widgets.descriptionMap[["s-Panel_1", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_1", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Text_20", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_20", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_20"]; 

	widgets.descriptionMap[["s-Text_21", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_21", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_21"]; 

	widgets.descriptionMap[["s-Text_22", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_22", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_22"]; 

	widgets.descriptionMap[["s-Text_23", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_23", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_23"]; 

	widgets.descriptionMap[["s-Paragraph_33", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_33", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Paragraph_33"]; 

	widgets.descriptionMap[["s-Paragraph_34", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_34", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Paragraph_34"]; 

	widgets.descriptionMap[["s-Paragraph_35", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_35", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Paragraph_35"]; 

	widgets.descriptionMap[["s-Panel_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Text_14", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_14", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_14"]; 

	widgets.descriptionMap[["s-Text_15", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_15", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_15"]; 

	widgets.descriptionMap[["s-Text_16", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Text_16", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Text_16"]; 

	widgets.descriptionMap[["s-Image_13", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_13", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_13"]; 

	widgets.descriptionMap[["s-Image_14", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_14", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_14"]; 

	widgets.descriptionMap[["s-Image_15", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_15", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_15"]; 

	widgets.descriptionMap[["s-Image_16", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_16", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_16"]; 

	widgets.descriptionMap[["s-Image_17", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_17", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_17"]; 

	widgets.descriptionMap[["s-Image_18", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_18", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_18"]; 

	widgets.descriptionMap[["s-Panel_3", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_3", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Softkeys-bg", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Softkeys-bg", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Square", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Square", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Circle", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Circle", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Triangle", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Triangle", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Rectangle_25", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_25", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Rectangle", "s-Rectangle_25"]; 

	widgets.descriptionMap[["s-Bg_status_6", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Bg_status_6", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Status bar light", "s-Status-bar_5"]; 

	widgets.descriptionMap[["s-hour_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-hour_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Status bar light", "s-Status-bar_5"]; 

	widgets.descriptionMap[["s-signals_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-signals_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Status bar light", "s-Status-bar_5"]; 

	widgets.descriptionMap[["s-Image_45", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_45", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image", "s-Image_45"]; 

	widgets.descriptionMap[["s-Rectangle_26", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_26", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Rectangle", "s-Rectangle_26"]; 

	widgets.descriptionMap[["s-menu_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-menu_5", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Menu", "s-menu_5"]; 

	widgets.descriptionMap[["s-Black-cover", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Black-cover", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Dark Background", "s-Black-cover"]; 

	widgets.descriptionMap[["s-Image_7", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_7", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Image placeholder", "s-Image_7"]; 

	widgets.descriptionMap[["s-Image_35", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Image_35", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["User icon", "s-Image_35"]; 

	widgets.descriptionMap[["s-Paragraph_36", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_36", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Paragraph_36"]; 

	widgets.descriptionMap[["s-Paragraph_37", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_37", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Text", "s-Paragraph_37"]; 

	widgets.descriptionMap[["s-Rectangle_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_2", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Light button 1", "s-Rectangle_2"]; 

	widgets.descriptionMap[["s-Rectangle_8", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_8", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Light button 1", "s-Rectangle_8"]; 

	widgets.descriptionMap[["s-Rectangle_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_11", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Light button 1", "s-Rectangle_11"]; 

	widgets.descriptionMap[["s-Rectangle_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_12", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Light button 1", "s-Rectangle_12"]; 

	widgets.descriptionMap[["s-Panel_4", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_4", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Dynamic Panel", "s-Dynamic_Panel_1"]; 

	widgets.descriptionMap[["s-Paragraph_40", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_40", "6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"]] = ["Button", "s-Paragraph_40"]; 

	widgets.descriptionMap[["s-Title_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_3"]; 

	widgets.descriptionMap[["s-Paragraph_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_9"]; 

	widgets.descriptionMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_7"]; 

	widgets.descriptionMap[["s-Title_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_2"]; 

	widgets.descriptionMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_6"]; 

	widgets.descriptionMap[["s-Title_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_1"]; 

	widgets.descriptionMap[["s-Text_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_7"]; 

	widgets.descriptionMap[["s-Text_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_8"]; 

	widgets.descriptionMap[["s-Text_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_9"]; 

	widgets.descriptionMap[["s-Line_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Line_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Line", "s-Line_4"]; 

	widgets.descriptionMap[["s-Text_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_1"]; 

	widgets.descriptionMap[["s-Image_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Picture", "s-Image_24"]; 

	widgets.descriptionMap[["s-Panel_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Title", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Image_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_4"]; 

	widgets.descriptionMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Image_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_5"]; 

	widgets.descriptionMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_14", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_14", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Image_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_3"]; 

	widgets.descriptionMap[["s-Paragraph_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Image_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_6"]; 

	widgets.descriptionMap[["s-Paragraph_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_16", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_16", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Image_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_8"]; 

	widgets.descriptionMap[["s-Panel_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button", "s-Paragraph_4"]; 

	widgets.descriptionMap[["s-Image_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Check mark", "s-Image_2"]; 

	widgets.descriptionMap[["s-Rectangle_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_10", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_10", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Label", "s-Paragraph_24"]; 

	widgets.descriptionMap[["s-Paragraph_25", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_25", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title", "s-Paragraph_25"]; 

	widgets.descriptionMap[["s-Paragraph_11", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_11", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_1"]; 

	widgets.descriptionMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_19", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_19", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_2"]; 

	widgets.descriptionMap[["s-Paragraph_20", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_20", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_21", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_21", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_7"]; 

	widgets.descriptionMap[["s-Paragraph_22", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_22", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_23", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_23", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_8"]; 

	widgets.descriptionMap[["s-Panel_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_26", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_26", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button", "s-Paragraph_26"]; 

	widgets.descriptionMap[["s-Paragraph_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Label", "s-Paragraph_27"]; 

	widgets.descriptionMap[["s-Paragraph_28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title", "s-Paragraph_28"]; 

	widgets.descriptionMap[["s-Paragraph_29", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_29", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_30", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_30", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_3"]; 

	widgets.descriptionMap[["s-Paragraph_31", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_31", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Paragraph_32", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_32", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Input_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Input_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Input field", "s-Input_4"]; 

	widgets.descriptionMap[["s-Panel_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Softkeys-bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Softkeys-bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Square", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Square", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Circle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Circle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Triangle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Triangle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Horizontal softkeys", "s-Horizontal_softkeys"]; 

	widgets.descriptionMap[["s-Rectangle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Rectangle", "s-Rectangle"]; 

	widgets.descriptionMap[["s-Bg_status", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg_status", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar"]; 

	widgets.descriptionMap[["s-hour", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-hour", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar"]; 

	widgets.descriptionMap[["s-signals", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-signals", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar"]; 

	widgets.descriptionMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Rectangle_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Rectangle", "s-Rectangle_3"]; 

	widgets.descriptionMap[["s-menu", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-menu", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Menu", "s-menu"]; 

	widgets.descriptionMap[["s-Black-cover", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Black-cover", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dark Background", "s-Black-cover"]; 

	widgets.descriptionMap[["s-Image_33", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_33", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_33"]; 

	widgets.descriptionMap[["s-Image_34", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_34", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Account Circle", "s-Image_34"]; 

	widgets.descriptionMap[["s-Rectangle_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button dark", "s-Rectangle_17"]; 

	widgets.descriptionMap[["s-Image_37", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_37", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["User icon", "s-Image_37"]; 

	widgets.descriptionMap[["s-Rectangle_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button dark", "s-Rectangle_18"]; 

	widgets.descriptionMap[["s-Image_38", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_38", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["User icon", "s-Image_38"]; 

	widgets.descriptionMap[["s-Image_39", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_39", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Facebook", "s-Image_39"]; 

	widgets.descriptionMap[["s-Image_40", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_40", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Twitter", "s-Image_40"]; 

	widgets.descriptionMap[["s-Image_41", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_41", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Instagram", "s-Image_41"]; 

	widgets.descriptionMap[["s-Rectangle_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Light button 1", "s-Rectangle_7"]; 

	widgets.descriptionMap[["s-Rectangle_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Light button 1", "s-Rectangle_9"]; 

	widgets.descriptionMap[["s-Panel_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Dynamic Panel", "s-Dynamic_Panel_2"]; 

	widgets.descriptionMap[["s-Bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Bg-bottom", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg-bottom", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Square_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Square_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Circle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Circle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Triangle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Triangle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_29", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_29", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_26", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_26", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_30", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_30", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Image_31", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_31", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Text_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Text_19", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_19", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Text_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Bg_status_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg_status_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar_1"]; 

	widgets.descriptionMap[["s-hour_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-hour_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar_1"]; 

	widgets.descriptionMap[["s-signals_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-signals_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Status bar light", "s-Status-bar_1"]; 

	widgets.descriptionMap[["s-Image_48", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_48", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	widgets.descriptionMap[["s-Text_25", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_25", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Home screen", "s-Home_screen"]; 

	jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_22",
                        "property": "jimIsVisible"
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_20",
                        "property": "jimIsVisible"
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Paragraph_18",
                      "property": "jimIsVisible"
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_11",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_31",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_29",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Circle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Home_screen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Black-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Circle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Home_screen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Home_screen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "pop",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Image_2" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keyup.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"^[a-zA-Z]+$" ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Nombre de usuario" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Nombre completo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_19 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_19 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_30" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_32" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "428.07"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_19 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_19" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "350.07"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_19 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "283.07"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "214.07"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"^[a-zA-Z][a-zA-Z\\s]*$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_30" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "298.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_32" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "220.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_31" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });