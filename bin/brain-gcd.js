#!/usr/bin/env node

import { startGame } from '../src/index.js';

import { rules, startRound } from '../src/games/game-gcd.js';

startGame(rules, startRound);
