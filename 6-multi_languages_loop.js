#!/usr/bin/node
const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let out = '';
for (let i = 0; i < lines.length; i++) {
  out += (i ? '\n' : '') + lines[i];
}
console.log(out);
