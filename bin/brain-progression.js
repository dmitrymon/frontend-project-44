#!/usr/bin/env node

import { startGame } from '../src/index.js';

import { rules, startRound } from '../src/games/game-progression.js';

startGame(rules, startRound);
