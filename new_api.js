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
			['w', 'turn %m.motor on for %n secs',                 'motorOnFor',        'motor', 1],
			["w", "configure SBrick:%s with port A:%m.type B:%m.type C:%m.type D:%m.type", "connect", "SBrick", "motor", "motor", "motor", "motor"],
            [' ', 'turn %m.motor on',                             'motorOn',           'motor'],
            [' ', 'turn %m.motor off',                            'motorOff',          'motor'],
            [' ', 'set %m.motor power to %n',                     'startMotorPower',   'motor', 100],
            [' ', 'set %m.motor direction to %m.motorDirection',  'setMotorDirection', 'motor', 'this way'],
            ['h', 'when distance %m.lessMore %n',                 'whenDistance',      '<', 20],
            ['h', 'when tilt %m.eNe %n',                          'whenTilt',          '=', 1],
            ['r', 'distance',                                     'getDistance'],
            ['r', 'tilt',                                         'getTilt']
        ],
		menus: {
		    motor: ['motor', 'motor A', 'motor B', 'motor C', 'motor D', 'all motors'],
            motorDirection: ['this way', 'that way', 'reverse'],
			type: ["motor", "servo", "light", "WeDo Motion Sensor", "WeDo Tilt Sensor", "WeDo2 Motion Sensor", "WeDo2 Tilt Sensor", "EV3 Ultrasonic Sensor", "NXT Touch Sensor"],
            lessMore: ['<', '>'],
            eNe: ['=', 'not =']
		}
    };

    // Register the extension
    ScratchExtensions.register('SBrick plugin V0.9', descriptor, ext);
})({});