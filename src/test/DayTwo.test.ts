import { expect, test } from 'vitest'
import { getCubeSets, Game, CubeSet, makeSet, findPossibleGames, findFewerNumberOfCubesGameToPossible } from '../main/DayTwo'

const sampleInput = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"
const actual:Game[] = [new Game(1, [new CubeSet(3,4,0),
                                            new CubeSet(6,1,2),new CubeSet(0,0,2)]),
                       new Game(2,[new CubeSet(1,0,2),new CubeSet(4,1,3),
                                            new CubeSet(1,0,1)])]

test('Test for getCubeSets()',()=>{
    expect(getCubeSets(sampleInput)).toEqual(actual)
})

const input = "3 blue, 4 red"
const output = new CubeSet(3,4,0)
test('Test makeSet()',()=>{
    expect(makeSet(input)).toEqual(output)
})

const actualOutput = [1,2]
test('Test findPossibleGames()',()=>{
    expect(findPossibleGames(actual)).toEqual(actualOutput)
})

const actualOutput2 = [48,12]
test('Test findFewerNumberOfCubesGameToPossible()',()=>{
    expect(findFewerNumberOfCubesGameToPossible(actual)).toEqual(actualOutput2)
})