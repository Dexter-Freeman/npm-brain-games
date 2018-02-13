#!/usr/bin/env node

import { welcome, askName, hello } from '../index'; // Импортируем функцию greeting из index.js

welcome();
const name = askName();
hello(name);
