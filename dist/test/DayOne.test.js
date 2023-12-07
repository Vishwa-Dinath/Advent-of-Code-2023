"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const DayOne_1 = require("../main/DayOne");
const input = "1abc2\n" +
    "pqr3stu8vwx\n" +
    "a1b2c3d4e5f\n" +
    "treb7uchet";
const actual = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
(0, vitest_1.test)('Test reading file', () => {
    (0, vitest_1.expect)((0, DayOne_1.getInputs)(input)).toEqual(actual);
});
const actual2 = [12, 38, 15, 77];
(0, vitest_1.test)('Testing findCalibrationValues()', () => {
    (0, vitest_1.expect)((0, DayOne_1.findCalibrationValues)(actual)).toEqual(actual2);
});
(0, vitest_1.test)('Test getSum() method', () => {
    (0, vitest_1.expect)((0, DayOne_1.getSum)(actual2)).toBe(142);
});
