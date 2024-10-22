// const { MathBattle } = require('./MathBattle.class.js');
import { MathBattle } from "./MathBattle.class.js";


// class Daemon extends MathBattle {
export class Daemon extends MathBattle {
    constructor(name, type) {
        super(name, type = 'Daemon');
        this.type = type;
    }
}

// module.exports = {
//     Daemon,
// }
