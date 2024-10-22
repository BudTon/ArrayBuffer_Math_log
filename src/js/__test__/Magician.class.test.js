/* eslint-disable no-undef */
import { Magician } from '../Magician.class.js';

test("Test Magician.class created", () => {
    const result = new Magician('Gor')
    const expected = { "attack": 10, "defence": 40, "health": 100, "level": 1, "name": "Gor", "stoned": false, "type": "Magician" }
    expect(result).toEqual(expected);
});