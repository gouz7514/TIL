[Javascript Weekly](https://javascriptweekly.com/)를 받아보고는 있었는데 이 공부 저 공부 한다고 소홀히 하다가 최근 흥미로운 글들이 많이 보여 공부 겸 번역해보기로 하였다.

원문 링크 : ['export default thing' is different to 'export { thing as default }'](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/)
***
글쓴이 Jake Archibald는 크롬에서 일하는 개발자로 트위터에서 순환 종속(circular dependencies)에 관한 질문을 받고 이 글을 작성하였다. 

### import는 값이 아닌 참조다
이것은 import문의 예시입니다.
```javascript
import { thing } from './module.js'
```
위 예시에서, `thing`은 `./module.js`의 `thing`과 같습니다. 당연한 소리지만 그렇다면 다음은 어떨까요
```javascript
const module = await import('./module.js')
const { thing : destructuredThing } = await import ('./module.js')
```
이 경우에서 `module.thing`은 `./module.js`의 `thing`과 같은 반면에, `destructuredThing`은 `./module.js`의 `thing`의 값을 가지는 새로운 식별자이면서 다르게 동작합니다.

다음은 `./module.js`입니다.
```javascript
// module.js
export let thing = 'initial';

setTimeout(() => {
  thing = 'changed';
}, 500);
```
다음은 `./main.js`입니다.
```javascript
// main.js
import { thing as importedThing } from './module.js';
const module = await import('./module.js');
let { thing } = await import('./module.js');

setTimeout(() => {
  console.log(importedThing); // "changed"
  console.log(module.thing); // "changed"
  console.log(thing); // "initial"
}, 1000);
```
import는 'live binding' (다른 언어에서는 소위, 참조 : reference) 입니다.<br>
이는 `module.js`의 `thing`에 다른 값이 할당되면, 이 변화는 `main.js`의 import에 반영되는 것을 의미합니다.<br>
destructured import는 새로운 식별자에 **현재 값**(live reference가 아닌)을 할당하기 때문에 이 변화를 반영하지 않습니다.

destructuring은 import에만 국한되지 않습니다.
```javascript
const obj = { foo: 'bar' };

// This is shorthand for:
// let foo = obj.foo;
let { foo } = obj;

obj.foo = 'hello';
console.log(foo); // Still "bar"
```
제 생각에는 위의 내용이 자연스러운 것 같습니다. 여기서 주목할 점은 named static imports (`import { thing } ... `)이 destructuring과 비슷하게 보이지만 destructuring과는 다르게 동작합니다.

자, 그래서 현재 우리는 이 상태입니다.
```javascript
// These give you a live reference to the exported thing(s):
import { thing } from './module.js';
import { thing as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// This assigns the current value of the export to a new identifier:
let { thing } = await import('./module.js');
```
---
### `export default`는 다르게 동작한다
`./module.js`입니다.
```javascript
// module.js
let thing = 'initial';

export { thing };
export default thing;

setTimeout(() => {
  thing = 'changed';
}, 500);
```
`./main.js`입니다.
```javascript
// main.js
import { thing, default as defaultThing } from './module.js';
import anotherDefaultThing from './module.js';

setTimeout(() => {
  console.log(thing); // "changed"
  console.log(defaultThing); // "initial"
  console.log(anotherDefaultThing); // "initial"
}, 1000);
```
`initial`을 기대하진 않았습니다...

**왜?**
특정 값을 `export default`를 통해 바로 사용할 수 있습니다.
```javascript
export default 'hello!';
```
이런 방식은 named exports로는 불가능합니다.
```javascript
// This doesn't work
export { 'hello!' as thing };
```
`export default 'hello!'`를 가능하게 하는 것은, `export thing`과 다른 방식입니다. `export default` 바로 다음 구문은 표현식처럼 처리되서, `export default 'hello!'`나 `export default 1 + 2`와 같은 구문이 가능하게 합니다.

`export default thing`의 경우에도 같은 방식으로 동작하지만, `thing`이 표현식처럼 처리되서 값에 의한 전달이 발생하게 됩니다. 이는 즉, export가 되기 바로 전 일종의 숨어있는 변수(hidden variable)에 할당되서 (setTimeout에서 새로운 값 할당), 그 변화가 export 시에 반영되지 않는 것입니다.

> To make `export default 'hello!'` work, the spec gives `export default thing` different semantics to `export thing`.
The bit after `export default` is treated like an expression, which allows for things like `export default 'hello!'` and `export default 1 + 2`.
This also 'works' for `export default thing`, but since `thing` is treated as an expression it causes `thing` to be passed by value. It's as if it's assigned to a hidden variable before it's exported, and as such, when `thing` is assigned a new value in the `setTimeout`, that change isn't reflected in the hidden variable that's actually exported.

따라서
```javascript
// These give you a live reference to the exported thing(s):
import { thing } from './module.js';
import { thing as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// This assigns the current value of the export to a new identifier:
let { thing } = await import('./module.js');

// These export a live reference:
export { thing };
export { thing as otherName };

// These export the current value:
export default thing;
export default 'hello!';
```
---
### `export { thing as default }`는 다르다
`export {}`는 값이 아닌 live reference를 전달하기 때문에 사용할 수 없습니다. 그래서
```javascript
// module.js
let thing = 'initial';

export { thing, thing as default };

setTimeout(() => {
  thing = 'changed';
}, 500);
```
```javascript
// main.js
import { thing, default as defaultThing } from './module.js';
import anotherDefaultThing from './module.js';

setTimeout(() => {
  console.log(thing); // changed
  console.log(defaultThing); // changed
  donsole.log(anotherDefaultThing); // changed
}, 1000);
```
`export default thing`과 다르게, `export { thing as default }`는 `thing`을 live reference로 넘겨 줍니다. 따라서,
```javascript
// These give you a live reference to the exported thing(s):
import { thing } from './module.js';
import { thing as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// This assigns the current value of the export to a new identifier:
let { thing } = await import('./module.js');

// These export a live reference:
export { thing };
export { thing as otherName };
export { thing as default };
// These export the current value:
export default thing;
export default 'hello!';
```
아직 안 끝났다!
***
