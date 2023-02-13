const fs = require('fs');
const path = require('path');
const p = require('child_process');
const { cwd } = require('process');

const packages = fs.readdirSync('./packages');
packages.forEach(dir => {
  const cdDir = path.resolve(cwd(), './packages', dir) 
  console.log({cdDir});
  p.execSync(`cd ${cdDir} && npm publish --access=public`, { encoding: 'utf-8' });
});
