import { thing as importedThing } from './module.js';
const module = await import('./module.js');
let { thing } = await import('./module.js');

setTimeout(() => {
  console.log(importedThing); // changed
  console.log(module.thing); // changed
  console.log(thing); // initial
}, 1000);

// destructured import는 새로운 식별자에 현재 값을 할당하기 때문에 변화 반영 X
