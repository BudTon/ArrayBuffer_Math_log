/* eslint-disable no-undef */
import { Daemon } from '../Daemon.class.js';

test("Test Daemon.class created", () => {
    const result = new Daemon('Gor')
    const expected = { "attack": 25, "defence": 25, "health": 100, "level": 1, "name": "Gor", "stoned": false, "type": "Daemon" }
    expect(result).toEqual(expected);
});

test.each([
    [0, undefined],
    [3, 3],
])('testing Daemon.class.distanceSet() with distance = %s and expected = "%s"', (response, expected) => {
    const gor = new Daemon('Gor')
    gor.distanceSet(response)
    expect(gor.distance).toBe(expected);
})

test.each([
    [1, true],
    [2, false],
])('testing Daemon.class.stonedSet()', (response, expected) => {
    const gor = new Daemon('Gor')
    for (let index = 0; index < response; index++) {
        gor.stonedSet()
    }
    expect(gor.stoned).toBe(expected);
})

test.each([
    [['distance', 0], 0],
    [['distance', 2], 22],
    [['stoned', 2, true], 17],
])('testing Daemon.class.attackBattle()', (response, expected) => {
    const gor = new Daemon('Gor')
    if (response[0] === 'distance') {
        gor.distance = response[1]
    }
    if (response[0] === 'stoned') {
        gor.distance = response[1]
        gor.stoned = response[2]
    }
    gor.attackBattle()
    expect(gor.attackBattle).toBe(expected);
})
