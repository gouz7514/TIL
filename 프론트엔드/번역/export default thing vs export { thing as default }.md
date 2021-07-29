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
### `export default function`은 또 다른 경우
`export default` 바로 다음 구문은 표현식처럼 처리된다고 위에서 언급했습니다. 하지만 예외가 존재합니다.
```javascript
// module.js
export default function thing() {}

setTimeout(() => {
  thing = 'changed';
}, 500);
```
```javascript
// main.js
import thing from './module.js';

setTimeout(() => {
  console.log(thing); // changed
}, 1000);
```
`export default funcation`은 고유의 특별한 구문이므로 `changed`가 출력됩니다.<br>
이 경우 함수는 참조에 의해 전달됩니다.<br>
만약 `module.js`를 바꾼다면
```javascript
// module.js
function thing() {}

export default thing;

setTimeout(() => {
  thing = 'changed';
}, 500);
```
더 이상 특별 케이스가 아니므로 값에 의해 전달되서 `f thing() {}`이 출력됩니다.

**왜?**
`export default function`뿐 아니라 `export default class`도 같은 방식으로 특별한 경우입니다.<br>
이는 이러한 문장이 표현식일 때 나타나는 동작의 변화와 관련이 있습니다.
```javascript
function someFunction() {}
class SomeClass {}

console.log(typeof someFunction); // "function"
console.log(typeof SomeClass); // "function"
```
하지만 표현식으로 바꾼다면
```javascript
(function someFunction() {});
(class SomeClass {});

console.log(typeof someFunction); // "undefined"
console.log(typeof SomeClass); // "undefined"
```
`function`과 `class` 선언문이 스코프/블록에 식별자를 만드는 반면 `function`, `class`표현 식은 그렇지 않습니다.

따라서,
```javascript
export default function someFunction() {}
console.log(typeof someFunction); // "function"
```
만약 `export defatul function`이 특수 케이스가 아니었다면, 함수는 표현식처럼 처리되어서 `undefined`가 출력됐을 것입니다. 특수 케이스는 또한 순환 종속의 경우에도 도움이 됩니다. (이 부분은 후술)

정리하자면
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
export default function thing() {}
// These export the current value:
export default thing;
export default 'hello!';
```
`export default identifier`가 살짝 이상해 보이긴 합니다.<br>
`export default 'hello!'`는 값에 의해 전달될 필요가 있지만, `export default function`이라는 참조로 전달되는 특수 케이스가 있는 만큼, `export default identifier`같은 경우를 위한 특수 케이스가 필요해 보입니다. 제 생각에 지금 바꾸기엔 너무 늦은 것 같네요.

저는 자바스크립트 모듈 디자인과 관련 있는 [Dave Herman](https://twitter.com/littlecalculist)과 얘기를 나눴습니다.<br>
그는 default exports의 초기 디자인은 `thing`을 좀 더 명확히 표현식처럼 처리할 수 있는 `export default = thing`이었다고 했습니다. 전적으로 동의합니다!
***
### 순환 종속의 경우에는 어떤가?
우선 `hoisting`에 대해 알아야 합니다.
```javascript
thisWorks();

function thisWorks() {
  console.log('yep, it does');
}
```
순수 함수 선언의 경우 항상 최상단으로 옮겨지게 됩니다.
```javascript
// Doesn't work
assignedFunction();
// Doesn't work either
new SomeClass();

const assignedFunction = function () {
  console.log('nope');
};
class SomeClass {}
```
`let`, `const`, `class`가 초기화 되기 전 접근하려 한다면 에러가 발생합니다.

**`var`는 다르다**
```javascript
var foo = 'bar';

function test() {
  console.log(foo);
  var foo = 'hello';
}

test();
```
위 코드는 함수 내의 `var foo`는 함수의 최상단으로 호이스팅되지만, `'hello'`의 할당은 그대로기 때문에 `undefined`가 출력됩니다.<br>
`let`, `const`, `class` 가 에러를 발생시키는 것과 비슷한 경우입니다.

**순환 종속의 경우?**
자바스크립트는 순환 종속을 허용하지만 기피해야 합니다. 예를 들어
```javascript
// main.js
import { foo } from './module.js';

foo();

export function hello() {
  console.log('hello');
}
```
```javascript
// module.js
import { hello } from './main.js';

hello();

export function foo() {
  console.log('foo');
}
```
이것은 동작합니다! `"hello"`와 `"foo"`가 출력됩니다.<br>
하지만 이는 양측의 함수가 호이스팅되기 때문에 가능한 현상입니다. 만약 코드를 다음과 같이 변경한다면

```javascript
// main.js
import { foo } from './module.js';

foo();

export const hello = () => console.log('hello');
```
```javascript
// module.js
import { hello } from './main.js';

hello();

export const foo = () => console.log('foo');
```
실패합니다. `module.js`가 먼저 실행되고, 그 결과로 `hello`가 초기화되기 전 접근을 시도하기 때문에 에러가 발생합니다.

`export default`를 포함해 봅시다.
```javascript
// main.js
import foo from './module.js';

foo();

function hello() {
  console.log('hello');
}

export default hello;
```
```javascript
// module.js
import hello from './main.js';

hello();

function foo() {
  console.log('foo');
}

export default foo;
```
이 코드가 제가 질문받은 내용입니다.<br>
`module.js`의 `hello`가 `main.js`에 의해 export된 숨겨진 변수를 가리키고, 초기화되기 전 접근을 하기 때문에 실패합니다.

만약 `main.js`가 `export { hello as default }`로 바뀐다면 함수를 참조에 의해 전달하고 호이스팅되기 때문에 실패하지 않습니다.<br>
만약 `main.js`가 `export default function hello()`로 바뀐다면, `export default function`의 경우이기 때문에 실패하지 않습니다.

제 생각에는 `export default function`이 특별한 이유가 호이스팅이 가능하게 하는데 있다고 생각합니다.<br>그러나 `export default identifier`는 일관성으로 인해 특수한 경우라고 생각합니다.

내용은 여기까지입니다.
***
내용이 이렇게까지 길 줄은 몰랐다...<br>
다시 읽어보고 내용을 정리해야 겠지만 대충 골조는 `export default`문의 사용을 기피해야 한다는 점?<br>
이 내용이 내 것이 된다면 코드를 아주 멋드러지게 짤 수 있을 것 같다