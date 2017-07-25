(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			["w", "connect to SBrick name:%s with port A:%m.TYPES B:%m.TYPES C:%m.TYPES D:%m.TYPES", "connect", "SBrick", "motor", "motor", "motor", "motor"],
			["w", "aconnect to SBrick name:%s with port A:%m.TYPES B:%m.TYPES C:%m.TYPES D:%m.TYPES", "aconnect", "SBrick", "motor", "motor", "motor", "motor"],
			["w", "set SBrick name:%s port:%m.PORTS value:%n", "power", "SBrick", "A", 0],
			["w", "set servo SBrick name:%s port:%m.PORTS angle:%m.ANGLES", "servo", "SBrick", "A", 0],
			["w", "set motor direction on SBrick name:%s port:%m.PORTS to:%m.DIRECTIONS", "direction", "SBrick", "A", "left"],
			["w", "set motor power on SBrick name:%s port:%m.PORTS to:%m.POWERS", "motor", "SBrick", "A", 0],
			["w", "set light power on SBrick name:%s port:%m.PORTS to:%m.POWERS", "light", "SBrick", "A", 0],
			["w", "set identify led on SBrick name:%s to:%m.LED", "led", "SBrick", "off"],
								
			["r", "get value on SBrick name:%s port:%m.PORTS", "getport", "SBrick", "A"],
			["r", "distance on SBrick name:%s port:%m.PORTS", "getdistance", "SBrick", "A"],
			["b", "touch on SBrick name:%s port:%m.PORTS", "gettouch", "SBrick", "A"],
			["b", "tilt angle on SBrick name:%s port:%m.PORTS is %m.TILTS", "gettilt", "SBrick", "A", "center"],
			["b", "servo on SBrick name:%s port:%m.PORTS rotated to %m.ANGLES", "getservoangle", "SBrick", "A", 0],
			
			["b", "SBrick name:%s is connected", "getready", "SBrick"],
			["r", "get temperature on SBrick name:%s", "gettemperature", "SBrick"],
			["r", "get voltage on SBrick name:%s", "getvoltage", "SBrick"],
			["r", "get hardware on SBrick name:%s", "gethardware", "SBrick"],
			["r", "in range", "SBricks"]
        ],
		menus: {
			"LED": ["off", "on"],
			"PORTS": ["A", "B", "C", "D"],
			"TYPES": ["motor", "servo", "light", "WeDo Motion Sensor", "WeDo Tilt Sensor", "WeDo2 Motion Sensor", "WeDo2 Tilt Sensor", "EV3 Ultrasonic Sensor", "NXT Touch Sensor"],
			"TILTS": ["up", "down", "center", "left", "right"],
			"ANGLES": [-90, -75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75, 90],
			"POWERS": [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
			"DIRECTIONS": ["left","right"],
			"lessMore": ["<", ">"],
			"eNe": ["=","not ="]
        },
    };

    // Register the extension
    ScratchExtensions.register('SBrick legacy plugin V0.1', descriptor, ext);
})({});