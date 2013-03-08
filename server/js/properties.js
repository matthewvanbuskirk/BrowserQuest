
var Types = require("../../shared/js/gametypes");

var Properties = {
    rat: {
        drops: {
            flask: 40,
            coin: 25,
            burger: 10,
            firepotion: 5
        },
        hp: 25,
        armor: 1,
        weapon: 1
    },
    
    skeleton: {
        drops: {
            flask: 40,
            coin: 15,
            fivecoin: 10,
            axe: 20,
            firepotion: 5
        },
        hp: 110,
        armor: 2,
        weapon: 2
    },
    
    goblin: {
        drops: {
            flask: 50,
            fivecoin: 20,
            axe: 10,
            firepotion: 5
        },
        hp: 90,
        armor: 2,
        weapon: 1
    },
    
    ogre: {
        drops: {
            burger: 10,
            flask: 50,
            tencoin: 25,
            morningstar: 10,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 2
    },
    
    spectre: {
        drops: {
            flask: 30,
            twentycoin: 40,
            redsword: 25,
            firepotion: 5
        },
        hp: 250,
        armor: 2,
        weapon: 4
    },
    
    deathknight: {
        drops: {
            burger: 55,
            twentycoin: 40,
            firepotion: 5
        },
        hp: 250,
        armor: 3,
        weapon: 3
    },
    
    crab: {
        drops: {
            flask: 50,
            axe: 20,
            coin: 25,
            firepotion: 5
        },
        hp: 60,
        armor: 2,
        weapon: 1
    },
    
    snake: {
        drops: {
            flask: 50,
            tencoin: 30,
            morningstar: 10,
            firepotion: 5
        },
        hp: 150,
        armor: 3,
        weapon: 2
    },
    
    skeleton2: {
        drops: {
            flask: 60,
            tencoin: 30,
            bluesword: 5,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 3
    },
    
    eye: {
        drops: {
            flask: 50,
            twentycoin: 35,
            redsword: 10,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 3
    },
    
    bat: {
        drops: {
            flask: 50,
            fivecoin: 20,
            axe: 10,
            firepotion: 5
        },
        hp: 80,
        armor: 2,
        weapon: 1
    },
    
    wizard: {
        drops: {
            flask: 50,
            tencoin: 25,
            platearmor: 20,
            firepotion: 5
        },
        hp: 100,
        armor: 2,
        weapon: 6
    },
    
    boss: {
        drops: {
            goldensword: 100
        },
        hp: 700,
        armor: 6,
        weapon: 7
    }
};

Properties.getArmorLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].armor;
        } else {
            return Types.getArmorRank(kind) + 1;
        }
    } catch(e) {
        log.error("No level found for armor: "+Types.getKindAsString(kind));
    }
};

Properties.getWeaponLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].weapon;
        } else {
            return Types.getWeaponRank(kind) + 1;
        }
    } catch(e) {
        log.error("No level found for weapon: "+Types.getKindAsString(kind));
    }
};

Properties.getHitPoints = function(kind) {
    return Properties[Types.getKindAsString(kind)].hp;
};

module.exports = Properties;