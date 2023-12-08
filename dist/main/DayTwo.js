"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPossibleGames = exports.makeSet = exports.getCubeSets = exports.CubeSet = exports.Game = void 0;
const sampleInput1 = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
const input = "Game 1: 19 blue, 12 red; 19 blue, 2 green, 1 red; 13 red, 11 blue\n" +
    "Game 2: 1 green, 1 blue, 1 red; 11 red, 3 blue; 1 blue, 18 red; 9 red, 1 green; 2 blue, 11 red, 1 green; 1 green, 2 blue, 10 red\n" +
    "Game 3: 3 blue, 2 red, 6 green; 4 blue, 6 green, 1 red; 11 green, 12 blue; 2 red, 6 green, 4 blue; 4 green\n" +
    "Game 4: 10 red, 5 green, 5 blue; 3 red, 3 blue, 6 green; 2 blue, 9 red, 6 green; 8 green, 10 red, 4 blue; 9 red, 2 green, 3 blue; 1 blue, 5 red, 15 green\n" +
    "Game 5: 11 green, 7 blue; 5 green, 5 red, 1 blue; 1 green, 1 red, 4 blue; 1 red, 1 blue, 4 green; 4 blue, 1 red, 10 green; 5 red, 6 green\n" +
    "Game 6: 1 green, 1 red, 11 blue; 1 blue, 2 green; 1 red, 5 green, 9 blue; 7 blue; 1 red, 2 green, 9 blue; 12 blue, 1 red, 2 green\n" +
    "Game 7: 1 blue, 10 red, 7 green; 14 blue, 10 green; 12 red, 2 green; 16 red, 13 blue, 1 green; 12 green, 10 red, 3 blue; 9 red, 19 blue, 11 green\n" +
    "Game 8: 3 blue, 1 green, 3 red; 4 blue, 10 red, 6 green; 1 green, 10 red, 9 blue; 9 blue, 7 red, 8 green; 8 green, 12 red, 8 blue; 6 blue, 1 green, 13 red\n" +
    "Game 9: 10 green, 2 blue, 11 red; 2 green, 2 red; 6 blue, 8 red, 13 green\n" +
    "Game 10: 8 red, 3 blue, 5 green; 5 green, 7 blue, 1 red; 3 red, 10 blue, 6 green; 2 red, 6 green, 7 blue; 3 blue, 11 red, 4 green; 8 red, 8 blue, 4 green\n" +
    "Game 11: 14 green, 9 red; 3 blue, 6 green, 8 red; 14 green\n" +
    "Game 12: 10 red, 5 blue, 1 green; 4 blue, 8 red; 5 blue, 1 green, 6 red; 14 red, 4 blue; 1 green, 11 red, 3 blue\n" +
    "Game 13: 1 blue, 16 green, 1 red; 6 red, 2 blue, 5 green; 2 blue, 12 red, 10 green; 3 red, 4 blue, 13 green; 14 red, 4 blue, 12 green; 7 red, 2 green\n" +
    "Game 14: 17 red, 11 blue, 3 green; 16 red, 3 blue, 8 green; 3 green, 9 red, 13 blue; 4 green, 15 red, 14 blue\n" +
    "Game 15: 7 blue, 2 red, 2 green; 1 green, 5 red, 6 blue; 3 green, 6 red, 2 blue\n" +
    "Game 16: 3 red, 3 green; 6 green, 4 red, 3 blue; 3 red, 4 blue; 4 blue, 2 red, 4 green\n" +
    "Game 17: 6 red, 1 blue, 5 green; 3 red, 1 green, 12 blue; 13 green, 1 blue; 5 blue, 7 green, 6 red; 5 blue, 14 green, 2 red; 4 green, 6 red, 10 blue\n" +
    "Game 18: 4 red, 8 blue; 8 blue, 4 red; 12 blue, 1 green\n" +
    "Game 19: 1 blue, 15 green, 9 red; 1 red, 3 green; 4 blue, 2 green, 1 red\n" +
    "Game 20: 7 blue, 4 green, 12 red; 1 red, 9 green, 8 blue; 4 blue, 2 green; 13 green, 8 blue; 3 red, 4 green, 1 blue; 6 green, 7 red, 3 blue\n" +
    "Game 21: 9 green, 4 blue, 8 red; 5 blue; 7 red, 8 blue, 1 green\n" +
    "Game 22: 3 green, 4 red; 6 red, 3 green; 4 red, 1 blue, 1 green; 11 red, 3 green, 1 blue; 7 red, 1 blue\n" +
    "Game 23: 3 blue, 4 green; 3 green, 1 red; 1 red, 2 blue, 4 green\n" +
    "Game 24: 2 blue, 3 green; 9 red, 4 green; 2 blue, 9 red; 2 green, 10 red, 1 blue; 1 blue, 1 red, 5 green\n" +
    "Game 25: 8 green, 4 blue; 9 blue, 7 red; 5 green, 15 blue, 11 red; 11 green, 14 red, 10 blue\n" +
    "Game 26: 3 blue; 2 red, 1 green; 2 red, 3 blue; 10 blue, 1 red, 3 green; 1 green, 2 red; 1 green, 6 blue\n" +
    "Game 27: 1 green, 6 blue; 2 green, 1 red, 6 blue; 1 red, 2 blue, 1 green\n" +
    "Game 28: 8 blue, 1 red, 5 green; 1 red; 3 green, 4 red, 2 blue; 4 green, 2 red, 4 blue; 5 blue, 3 red, 7 green\n" +
    "Game 29: 2 green, 4 blue; 7 blue, 4 red, 10 green; 7 blue, 9 green; 14 green, 7 red, 5 blue\n" +
    "Game 30: 19 green, 3 red; 19 green; 1 blue, 14 green; 2 blue, 5 green; 3 red, 19 green\n" +
    "Game 31: 3 red, 1 green, 4 blue; 10 blue; 3 red, 4 green, 5 blue; 10 blue, 1 red, 6 green\n" +
    "Game 32: 19 red, 1 green, 2 blue; 1 blue, 6 green, 13 red; 10 green, 9 red; 11 red, 2 blue, 6 green; 8 green, 5 red\n" +
    "Game 33: 2 red, 8 blue, 2 green; 1 red, 3 green; 9 red, 9 blue, 1 green; 6 red, 1 green; 9 blue, 1 green, 8 red; 5 green, 10 red, 8 blue\n" +
    "Game 34: 1 red, 6 blue, 2 green; 7 red; 14 red, 13 blue; 13 red, 12 blue; 1 green, 9 red, 13 blue; 2 green, 15 blue\n" +
    "Game 35: 8 blue, 2 red, 3 green; 2 green, 2 red; 3 red, 6 blue, 2 green; 2 green, 6 blue; 1 green, 5 blue, 4 red; 3 green, 6 blue\n" +
    "Game 36: 3 red, 5 blue, 10 green; 1 red, 1 green, 7 blue; 2 blue, 2 green, 1 red\n" +
    "Game 37: 8 red, 7 green; 5 green, 1 blue, 6 red; 7 red, 6 blue, 11 green\n" +
    "Game 38: 4 green, 10 red, 9 blue; 12 green, 2 blue, 2 red; 6 red, 6 blue, 9 green; 1 blue, 1 green, 6 red; 3 blue, 1 red, 5 green; 5 blue, 2 red, 12 green\n" +
    "Game 39: 1 blue, 2 red; 7 blue, 2 green, 1 red; 7 blue, 11 green, 3 red; 8 blue, 13 green, 1 red; 6 green, 6 blue, 3 red\n" +
    "Game 40: 8 green, 5 blue; 5 green, 1 blue, 10 red; 9 green, 3 blue; 3 green, 7 red; 2 green, 3 blue, 5 red\n" +
    "Game 41: 7 green, 8 red; 3 blue, 15 green, 7 red; 2 red, 2 green, 4 blue; 10 green, 4 red, 5 blue; 3 red, 8 blue, 9 green; 7 red, 8 green\n" +
    "Game 42: 6 blue, 12 green; 3 red, 1 green; 1 red, 12 green, 3 blue; 10 red, 9 green; 9 red, 4 green, 5 blue\n" +
    "Game 43: 11 red, 6 green; 2 blue, 11 red; 3 red, 1 blue; 3 green, 11 red, 2 blue; 4 red, 5 green, 1 blue; 8 green, 2 blue, 17 red\n" +
    "Game 44: 2 green, 9 blue, 3 red; 7 blue, 1 green, 4 red; 1 green\n" +
    "Game 45: 1 green, 10 red; 5 red, 10 green, 1 blue; 11 red, 3 green, 2 blue; 2 blue, 3 green, 4 red; 7 green, 3 red, 2 blue; 1 blue, 10 red\n" +
    "Game 46: 1 green, 4 blue, 7 red; 13 blue, 2 green, 9 red; 7 blue, 3 red, 1 green\n" +
    "Game 47: 4 blue; 2 green, 2 red, 1 blue; 1 green, 1 red, 4 blue; 1 green, 2 red, 2 blue; 2 blue, 2 red\n" +
    "Game 48: 5 green, 10 red; 7 red, 5 green; 1 green, 11 red; 12 red, 11 green; 11 red, 1 blue, 1 green\n" +
    "Game 49: 2 green, 1 red, 1 blue; 1 blue, 2 red; 2 green, 1 red, 2 blue; 1 blue, 1 red, 1 green\n" +
    "Game 50: 5 green, 2 blue; 4 green, 4 blue, 3 red; 1 red, 7 green, 3 blue\n" +
    "Game 51: 9 green, 1 red, 2 blue; 7 red, 3 blue, 6 green; 5 green, 4 blue, 5 red\n" +
    "Game 52: 2 green, 4 blue, 1 red; 2 blue, 2 red, 13 green; 8 blue, 3 green; 3 green, 4 blue, 2 red; 2 green\n" +
    "Game 53: 3 red; 4 blue, 4 red; 2 blue, 2 red; 6 blue, 1 red, 2 green; 1 red, 1 green, 6 blue; 2 blue, 4 red\n" +
    "Game 54: 3 blue, 3 green, 18 red; 4 blue, 18 red, 3 green; 7 blue, 4 green\n" +
    "Game 55: 1 green, 2 red, 3 blue; 1 red, 4 blue, 1 green; 3 blue, 2 red; 2 blue, 1 green; 3 blue, 2 red; 1 blue, 1 green, 1 red\n" +
    "Game 56: 12 green, 2 red, 1 blue; 11 green, 16 red, 13 blue; 7 red, 5 blue, 12 green; 4 blue, 16 red; 5 red, 1 blue, 3 green\n" +
    "Game 57: 5 green, 17 blue, 11 red; 6 blue, 1 green; 1 green, 5 blue, 8 red; 9 green, 11 red, 1 blue; 9 green, 11 blue, 7 red; 8 green, 4 blue\n" +
    "Game 58: 5 red, 10 blue, 6 green; 5 green, 11 blue, 5 red; 9 green; 4 red, 2 green\n" +
    "Game 59: 2 red, 6 blue, 1 green; 1 green, 12 blue; 2 red\n" +
    "Game 60: 6 blue, 10 green, 9 red; 8 red, 19 blue, 2 green; 16 red, 10 green, 12 blue; 13 red, 12 blue, 6 green\n" +
    "Game 61: 12 green, 1 red, 3 blue; 3 red, 4 blue, 19 green; 1 blue, 7 green\n" +
    "Game 62: 7 red, 6 blue, 8 green; 10 blue, 3 green, 17 red; 13 blue, 3 red, 10 green; 13 red, 5 blue, 9 green; 12 blue, 4 red; 10 red, 4 green\n" +
    "Game 63: 19 green, 4 red; 5 blue, 4 red, 1 green; 4 red, 2 blue, 15 green; 5 green, 4 red, 5 blue\n" +
    "Game 64: 6 red, 3 green; 6 green, 3 red, 3 blue; 3 blue, 8 red, 5 green; 3 blue, 7 red, 1 green; 1 blue, 6 red, 6 green\n" +
    "Game 65: 1 green, 9 blue; 6 blue, 4 green, 6 red; 6 blue, 5 green; 3 red, 1 blue, 4 green\n" +
    "Game 66: 1 blue, 2 red; 2 green, 1 blue; 2 red, 1 blue, 1 green; 1 blue, 1 green\n" +
    "Game 67: 16 blue, 1 green; 1 blue, 2 green, 2 red; 1 red, 9 blue; 12 blue, 4 green, 1 red; 6 green, 11 blue, 3 red\n" +
    "Game 68: 6 blue, 2 red, 1 green; 2 blue, 2 green; 1 green, 7 red, 15 blue; 14 blue, 12 green, 3 red; 13 green, 10 red, 6 blue; 2 green, 5 blue, 1 red\n" +
    "Game 69: 2 red, 1 blue, 2 green; 1 blue, 7 green, 1 red; 3 blue, 1 red, 7 green; 2 red, 1 blue, 11 green\n" +
    "Game 70: 2 green, 9 red, 3 blue; 12 blue, 1 green, 13 red; 6 red, 1 green, 5 blue; 1 red, 17 blue\n" +
    "Game 71: 7 red, 5 green, 6 blue; 5 blue, 5 green; 7 green, 4 blue; 2 green, 4 blue, 8 red; 10 red, 8 green; 3 blue, 13 red, 7 green\n" +
    "Game 72: 13 red, 17 green; 9 red, 20 green, 3 blue; 1 green, 3 blue, 8 red\n" +
    "Game 73: 1 blue, 7 red, 2 green; 2 green, 1 blue, 8 red; 1 blue, 2 red; 4 red, 7 green; 4 red, 5 green; 3 green, 7 red\n" +
    "Game 74: 2 green, 14 blue; 1 red, 1 blue, 7 green; 1 red, 8 green, 11 blue; 4 green, 12 blue; 1 green, 5 blue\n" +
    "Game 75: 12 blue, 1 red; 1 red, 7 blue, 4 green; 4 blue, 6 green; 4 green, 3 blue, 1 red\n" +
    "Game 76: 7 green, 5 red, 6 blue; 18 red, 1 green; 14 green, 4 red, 15 blue; 4 blue, 6 red\n" +
    "Game 77: 2 blue, 2 green, 2 red; 2 blue, 1 red, 1 green; 2 green, 1 red; 6 blue, 4 green; 1 red, 1 blue, 6 green\n" +
    "Game 78: 5 red, 16 blue, 12 green; 11 blue, 3 red, 2 green; 13 blue, 4 red\n" +
    "Game 79: 9 red, 11 green, 6 blue; 1 red, 3 green; 7 blue, 7 red, 11 green; 8 red, 9 blue, 11 green; 7 red, 11 green, 4 blue\n" +
    "Game 80: 7 green, 5 red, 2 blue; 1 blue, 7 green, 1 red; 2 red, 2 blue; 1 red, 4 blue, 12 green; 4 green, 2 blue\n" +
    "Game 81: 5 blue, 2 green, 12 red; 2 green, 1 blue, 5 red; 3 blue, 13 red, 3 green; 3 green, 9 blue, 3 red; 10 blue, 4 red, 3 green\n" +
    "Game 82: 11 blue, 1 red, 9 green; 11 green, 1 blue, 12 red; 13 red, 6 blue, 19 green\n" +
    "Game 83: 6 red, 5 blue, 16 green; 4 green, 17 blue, 9 red; 15 red, 2 green, 9 blue\n" +
    "Game 84: 19 green, 11 blue, 3 red; 1 blue, 18 green, 6 red; 17 blue, 5 green, 4 red; 18 blue, 7 green, 3 red\n" +
    "Game 85: 3 green, 15 blue; 12 blue; 2 green, 1 red; 1 red, 9 blue, 1 green; 12 blue, 3 red, 1 green\n" +
    "Game 86: 3 green, 4 blue, 5 red; 9 red, 4 green, 1 blue; 6 green, 1 blue, 8 red; 3 green, 2 blue, 5 red\n" +
    "Game 87: 2 red, 8 blue, 5 green; 3 red, 5 blue, 10 green; 2 red, 3 green\n" +
    "Game 88: 16 green, 13 red; 7 green, 1 blue, 2 red; 7 red, 12 green; 5 red, 7 green, 2 blue; 2 blue, 10 green, 7 red; 8 red, 16 green\n" +
    "Game 89: 1 blue, 8 red; 2 green, 10 red, 12 blue; 13 green, 14 blue; 10 blue, 15 red, 13 green; 2 green, 5 red, 13 blue\n" +
    "Game 90: 16 blue, 7 red, 4 green; 4 green, 6 red, 11 blue; 2 red, 8 blue, 2 green; 5 green, 8 red, 10 blue; 4 red, 2 green, 7 blue; 4 green, 5 blue, 5 red\n" +
    "Game 91: 4 red, 4 green, 1 blue; 3 blue, 2 green; 6 blue, 4 green, 5 red; 2 red, 6 blue, 4 green; 6 blue, 1 green\n" +
    "Game 92: 1 red, 3 green; 3 blue, 6 green; 5 blue, 1 red, 11 green; 1 red; 3 green, 13 blue\n" +
    "Game 93: 1 red, 14 blue, 6 green; 10 blue, 6 red; 9 green, 15 red, 17 blue; 9 red, 1 green, 9 blue\n" +
    "Game 94: 3 red, 14 green; 3 blue, 15 green, 3 red; 2 red, 15 green\n" +
    "Game 95: 4 blue, 13 red; 5 blue, 1 green, 11 red; 3 green, 3 blue, 10 red; 13 red, 6 blue; 2 green, 5 blue; 3 green, 11 red\n" +
    "Game 96: 7 blue, 1 green; 1 green, 4 blue; 1 green, 2 red, 5 blue; 1 red, 2 blue, 1 green; 1 blue\n" +
    "Game 97: 15 green, 9 blue; 14 blue, 14 red, 2 green; 18 red, 12 blue, 2 green\n" +
    "Game 98: 1 green, 9 red; 1 red, 2 green, 7 blue; 8 red, 1 blue; 6 red, 2 green; 1 green, 6 blue\n" +
    "Game 99: 1 green, 2 red, 6 blue; 6 red, 1 green, 5 blue; 11 blue, 6 red; 11 red, 1 green; 1 green, 11 red, 9 blue\n" +
    "Game 100: 12 green, 8 blue, 2 red; 7 blue, 14 red, 8 green; 14 red, 1 blue, 4 green";
class Game {
    constructor(gameID, sets) {
        this.gameID = gameID;
        this.sets = sets;
    }
}
exports.Game = Game;
class CubeSet {
    constructor(blue, red, green) {
        this.blue = blue;
        this.red = red;
        this.green = green;
    }
}
exports.CubeSet = CubeSet;
const presentCubeSet = new CubeSet(14, 12, 13);
function getCubeSets(input) {
    const inputs = input.split("\n");
    const games = [];
    inputs.forEach(input => {
        const gameNumber = +input.split(":")[0].replace("Game ", ""); // 1
        const cubeSets = input.split(":")[1].trim().split(";"); // ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
        const sets = [];
        cubeSets.forEach(set => {
            sets.push(makeSet(set));
        });
        games.push(new Game(gameNumber, sets));
    });
    return games;
}
exports.getCubeSets = getCubeSets;
function makeSet(set) {
    let blueCubes = 0;
    let redCubes = 0;
    let greenCubes = 0;
    const cubes = set.split(",");
    cubes.forEach(cube => {
        const amount = +cube.trim().split(" ")[0];
        const color = cube.trim().split(" ")[1];
        switch (color) {
            case "blue":
                blueCubes = amount;
                break;
            case "red":
                redCubes = amount;
                break;
            case "green":
                greenCubes = amount;
        }
    });
    return new CubeSet(blueCubes, redCubes, greenCubes);
}
exports.makeSet = makeSet;
function findPossibleGames(games) {
    const possibleGames = [];
    games.forEach(game => {
        let possible = true;
        for (let i = 0; i < game.sets.length; i++) {
            const tempSet = game.sets[i];
            if (tempSet.blue > presentCubeSet.blue || tempSet.red > presentCubeSet.red || tempSet.green > presentCubeSet.green) {
                possible = false;
                break;
            }
        }
        if (possible)
            possibleGames.push(game.gameID);
    });
    return possibleGames;
}
exports.findPossibleGames = findPossibleGames;
function getSum(possibleGames) {
    let sum = 0;
    possibleGames.forEach(index => {
        sum += index;
    });
    return sum;
}
function pipeline1(input) {
    return getSum(findPossibleGames(getCubeSets(input)));
}
console.log(pipeline1(sampleInput1));
console.log(pipeline1(input));
