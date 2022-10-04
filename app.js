//local dependency - use it in a partiular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (store important information about project/package)
//manual approach (create package.jsn in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
