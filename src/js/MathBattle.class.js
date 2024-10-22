import { UnitCharacter } from './Unit_character.class.js';
// const { UnitCharacter } = require('./Unit_character.class.js');

export class MathBattle extends UnitCharacter {
    constructor(name, type, distance) {
        super(name, type, distance);
        this.stoned = false;
    }

    stonedSet() {
        this.stoned ? this.stoned = false : this.stoned = true
    }

    attackBattle() {
        let attackBattle = 0;
        this.distance > 0 ? attackBattle = Math.floor(this.attack * (1 - (this.distance - 1) / 10)) : attackBattle = 0;
        this.stoned === true && attackBattle !== 0 ? attackBattle -= Math.floor(Math.log2(this.distance) * 5) : 0;
        attackBattle > 0 ? this.attackBattle = attackBattle : this.attackBattle = 0;
    }

    distanceSet(distance) {
        distance <= 0 | distance > 5 ? delete this.distance : this.distance = distance
    }
}

// module.exports = {
//     MathBattle,
// }
