// import { UnitCharacter } from './js/unit_character.class.js'
const { Daemon } = require('./js/Daemon.class.js');
const { Magician } = require('./js/Magician.class.js');

const tor = new Daemon('Gor')

console.log(tor);
tor.distanceSet(1)
// tor.stonedSet()
console.log(tor);
// tor.distanceSet(0)
tor.attackBattle()
console.log(tor);

const gor = new Magician('Tor')

console.log(gor);
gor.distanceSet(3)
// tor.stonedSet()
console.log(gor);
// tor.distanceSet(0)
gor.attackBattle()
console.log(gor);