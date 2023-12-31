import { expect, test } from 'vitest'
import { getInputs, findCalibrationValues, getSum, findDigitsWithLetters, findCalibrationValuesSolution2 } from '../main/DayOne'

const input = "1abc2\n" +
    "pqr3stu8vwx\n" +
    "a1b2c3d4e5f\n" +
    "treb7uchet";

const actual = ["1abc2","pqr3stu8vwx","a1b2c3d4e5f","treb7uchet"];

test('Test reading file',()=>{
    expect(getInputs(input)).toEqual(actual)
})

const actual2 = [12,38,15,77]
test('Testing findCalibrationValues()',()=>{
    expect(findCalibrationValues(actual)).toEqual(actual2)
})

test('Test getSum() method',()=>{
    expect(getSum(actual2)).toBe(142)
})

test('Test findDigitsWithLetters() method',()=>{
    expect(findDigitsWithLetters("eightwothree")).toBe("8igh2wo3hree")
})

const input2 = ["two1nine","eightwothree","abcone2threexyz","xtwone3four","4nineeightseven2","zoneight234","7pqrstsixteen"]
const output = [29,83,13,24,42,14,76]
test('findCalibrationValuesSolution2',()=>{
    expect(findCalibrationValuesSolution2(input2)).toEqual(output)
})