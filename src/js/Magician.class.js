// const { MathBattle } = require('./MathBattle.class.js');
import { MathBattle } from "./MathBattle.class.js";

// class Magician extends MathBattle {
export class Magician extends MathBattle {
    constructor(name, type) {
        super(name, type = 'Magician');
        this.type = type;
    }
}

// module.exports = {
//     Magician,
// }
