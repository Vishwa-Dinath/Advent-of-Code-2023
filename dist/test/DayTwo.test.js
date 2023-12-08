"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const DayTwo_1 = require("../main/DayTwo");
const sampleInput = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
const actual = [new DayTwo_1.Game(1, [new DayTwo_1.CubeSet(3, 4, 0),
        new DayTwo_1.CubeSet(6, 1, 2), new DayTwo_1.CubeSet(0, 0, 2)]),
    new DayTwo_1.Game(2, [new DayTwo_1.CubeSet(1, 0, 2), new DayTwo_1.CubeSet(4, 1, 3),
        new DayTwo_1.CubeSet(1, 0, 1)])];
(0, vitest_1.test)('Test for getCubeSets()', () => {
    (0, vitest_1.expect)((0, DayTwo_1.getCubeSets)(sampleInput)).toEqual(actual);
});
const input = "3 blue, 4 red";
const output = new DayTwo_1.CubeSet(3, 4, 0);
(0, vitest_1.test)('Test makeSet()', () => {
    (0, vitest_1.expect)((0, DayTwo_1.makeSet)(input)).toEqual(output);
});
const actualOutput = [1, 2];
(0, vitest_1.test)('Test findPossibleGames()', () => {
    (0, vitest_1.expect)((0, DayTwo_1.findPossibleGames)(actual)).toEqual(actualOutput);
});
