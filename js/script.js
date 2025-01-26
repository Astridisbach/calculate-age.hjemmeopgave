"use strict";

let birthYear = prompt("Enter your birth year:");

birthYear = parseInt(birthYear);

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(`You are ${age} years old.`);
