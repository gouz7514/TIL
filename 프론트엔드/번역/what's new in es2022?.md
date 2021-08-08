원문 링크 : [what's new in es2022?](https://yagmurcetintas.com/journal/whats-new-in-es2022)
***
반갑습니다! 아마 이 글을 읽는 당신은 가까운 미래에 우리가 쓸 수 있는 자바스크립트 기능에 대해 관심이 있다는 거겠죠.<br>
 하지만, 만약 당신이 TC39, ECMA, ECMAScript가 생소하다면 [이 기사](https://yagmurcetintas.com/journal/javascript-a-brief-introduction)를 읽고 오시길 바랍니다. 이 글의 내용들을 이해하려면 이들에 대해서 알아야 하기 때문이죠

> **간략 설명**
- **ECMA** : Ecma International. 정보와 통신 시스템을 위한 국제적 표준화 기구<br>
- **TC39** : ECMA의 여러 기술 위원회 중 ECMA-262(범용 목적의 스크립트 언어에 대한 명세를 규정한 하나의 기술 규격) 명세의 관리를 담당하는 위원회<br>
- **ECMAScript** : ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어. 스크립트 언어가 준수해야 하는 규칙, 세부 사항 및 지침을 제공<br>


### TC39의 명확한 단계
TC39는 자바스크립트 언어를 더 낫게 만드려는 공통된 목표 아래 다양한 배경을 지닌 사람들이 모인 놀랍고 헌신적인 그룹입니다.<br>
이를 위해, 그들은 **"웹을 망치지 않는다(don't break the web)"** 이라는 하나의 규칙을 갖고 있습니다. 언어에 대한 그들의 접근 방식은 마치 환자에게 의학적으로 접근하는 것과 같습니다.<br>
**"먼저, 해를 끼치지 말라(First, do no harm"** 모든 단계는 기존의 부분들을 망치지 않도록 신중하고 꼼꼼하게 계산됩니다.

스펙에 추가되기 위해서는 모든 기능들이 마치 임상 실험처럼 다음의 5단계를 거쳐야 합니다.<br>
다음 단계로 진행하기 위해서는 각각의 특정 기준을 만족해야 합니다. ECMAScript 스펙에 추가되기 위해서는 적어도 4단계는 만족해야 합니다.

- **Stage 0 / 제안** : 새로운 기능이 위원회에 제기되기 위한 계획 단계이거나, 아직 다음 단계를 위한 합격 기준을 만족하지 못한 제안들입니다. 현재 0단계에 위치한 제안들은 [이 곳](https://github.com/tc39/proposals/blob/master/stage-0-proposals.md)에서 확인할 수 있습니다.<br>
- **Stage 1 / 제안** : 아직 기초 단계이지만, 위원회가 정의된 API의 기본 구조를 점검할 여력이 있는 단계입니다. 현재 1단계에 위치한 제안들은 [이 곳](https://github.com/tc39/proposals/blob/master/stage-1-proposals.md)에서 확인할 수 있습니다.<br>
- **Stage 2 / 초안** : 제안의 핵심 부분과 문제들이 해결된 상태입니다. 이 기능들은 스펙의 다음 버전에 존재할 수 있는 기능들입니다. 현재 2단계에 위치한 제안들은 [이 곳](https://github.com/tc39/proposals/blob/master/README.md#stage-2)에서 확인할 수 있습니다.<br>
- **Stage 3 / 후보** : 제안이 상세하게 검토되었으며, 반려될 여지가 더 이상 없습니다. 스펙에 추가되기 전 마지막 단계입니다. 현재 3단계에 위치한 제안들은 [이 곳](https://github.com/tc39/proposals/blob/master/README.md#stage-3)에서 확인할 수 있습니다.<br>
- **Stage 4 / 완료** : 이제 스펙에 존재합니다. 완료된 제안들은 [이 곳](https://github.com/tc39/proposals/blob/master/finished-proposals.md)에서 확인할 수 있습니다.

### 이전 스펙에 추가된 기능들
자바스크립트는 계속 진화하는 언어로, 우리가 현재 사용하는 몇몇 기능들은 비교적 최근에 추가되었습니다. 2015년 이후, TC39는 매 년 새로운 기능들을 추가하기로 결정하였습니다. 다음은 2015년 이후 새롭게 추가된 기능들입니다.

#### ES2016
- `Array.protytype.includes()`
- `Exponentation operator (**, **=)` : 거듭제곱 연산자

#### ES2017
- `Object.values / Object.entries`
- `Trailing commas in function parameter lists and calls` : 함수 파라미터에 후행 `,`를 붙이는 것
- `Async` : async / await
- `Object.getOwnPropertyDescriptors()`
- `String.prototype.padStart() / String.prototype.padEnd()`

#### ES2018
- `Promise.prototype.finally`
- `Rest and spread operators(...)`
- `Asynchronous iteration`
- `Improvements on Regular Expressions`

#### ES2019
- `Array.prototype.flat()`
- `Array.prototype.flatMap()`
- `Object.fromEntries()`
- `String.prototype.trimStart()`
- `String.prototype.trimEnd()`
- `Symbol.prototype.description`
- `Optional catch binding`
- 기존 기능들의 수정 : `JSON.stringify()`, `Function.prototype.toString()`, `Array.sort()`

#### ES2020
- `String.prototype.matchAll()`
- `dynamic imports`
- `BigInt`
- `Promise.allSettled()`
- `globalThis`
- `Optional Chaining Operator(?.)`
- `Nullish coalescing operator(??)`

#### ES2021
- `String.prototype.replaceAll()`
- `Promise.any()`
- `Underscore as a numeric separator`
- `Logical assignment operators(&&=, ||=, ??=)`
- `WeakRefs and Finalizers`

### ES2022에 추가된 기능들
자세한 내용은 [이 곳](https://tc39.es/ecma262/)에서 확인할 수 있습니다

#### 1. Class Fields
- `Class Public Instance Fields & Private Instance Fields`
ES2015 이후로, 우리는 생성자를 통해 필드를 정의할 수 있었습니다. 일반적으로 클래스 메서드 외부에서 액세스하면 안 되는 필드에는 밑줄이 붙습니다. 하지만 이는 클래스를 사용하는 사람들을 막지 못했습니다.
```javascript
class ColorButton extends HTMLElement {
  
  constructor() {
    this.color = "red"
    this._clicked = false
  }
}

const button = new ColorButton()
// Public fields can be accessed and changed by anyone
button.color = "blue" 

// Curse your sudden but inevitable betrayal 
console.log(button._clicked) // Prints: false, can be accessed from the instance
button._clicked = true // Doesn't throw an error, can be read from the instance
```
이 기능의 첫번째 부분은 클래스 내의 필드를 좀 더 명확하게 정의할 수 있게 해줍니다.<br>
생성자 내에 정의하는 대신, 클래스의 최상단 레벨에 정의할 수 있습니다.
```javascript
class ColorButton extends HTMLElement {
  color = "red"
  _clicked = false
}
```
두번째 부분은, private 필드를 좀 더 안전하게 숨길 수 있습니다.<br>
밑줄을 붙이는 기존의 방식과 달리 필드 이름 앞에 '#'을 붙여 외부의 액세스를 방지할 수 있습니다.
```javascript
class ColorButton extends HTMLElement {
  // All fields are public by default
  color = "red"

  // Private fields start with a #, can only be changed from inside the class
  #clicked = false
}

const button = new ColorButton()
// Public fields can be accessed and changed by anyone
button.color = "blue"

// SyntaxError here 
console.log(button.#clicked) // Cannot be read from outside
button.#clicked = true // Cannot be assigned a value from outside
```

- `Private instance methods and accessors`
클래스의 몇몇 메소드나 변수는 클래스 내부적으로 기존에 의도했던 기능들을 수행해야 하는 중요도를 가지면서 외부에서 접근할 수 없어야 합니다.<br>
이를 방지하기 위해, 메소드나 접근자 앞에 '#'을 붙일 수 있습니다.
```javascript
class Banner extends HTMLElement {
  // Private variable that cannot be reached directly from outside, but can be modified by the methods inside:

  #slogan = "Hello there!"
  #counter = 0

  // private getters and setters (accessors):

  get #slogan() {return #slogan.toUpperCase()}
  set #slogan(text) {this.#slogan = text.trim()}

  get #counter() {return #counter}
  set #counter(value) {this.#counter = value}

  constructor() {
    super();
    this.onmouseover = this.#mouseover.bind(this);
  }

  // private method:
  #mouseover() {
    this.#counter = this.#counter++;
    this.#slogan = `Hello there! You've been here ${this.#counter} times.`
  }
}
```

- `Static class fields and private static methods`
정적 필드나 메소드는 프로토타입 내에서만 존재하도록 하는 데 있어 유용하지만, 주어진 클래스의 모든 인스턴스에 대해서는 그렇지 않습니다. 당신은 이 필드와 메소드들이 클래스 내에서만 액세스할 수 있도록 허용할 수 있습니다.

ES2015 이후로, 우리는 필드를 클래스 자체에 정의함으로서 정적 필드를 정의했습니다.
```javascript
class Circle {}
Circle.PI = 3.14
```
이제 우리는 `static`키워드를 통해 정적 필드를 클래스 내부에 정의할 수 있습니다.
```javascript
class Circle {
  static PI = 3.14
}
```
클래스 필드, 메소드에서 했던 것처럼 '#'을 붙여 private 하게 만들 수 있습니다. 이는 오직 클래스 내부에서만 액세스할 수 있도록 외부에서의 액세스를 방지합니다.
```javascript
class Circle {
  static #PI = 3.14

  static #calculateArea(radius) {
    return #PI * radius * radius
  }

  static calculateProperties(radius) {
    return {
      radius: radius,
      area: #calculateArea(radius)
    }
  }

}

// Public static method, outputs {radius: 10, area: 314}
console.log(Circle.calculateProperties(10))

// SyntaxError - Private static field
console.log(Circle.PI)

// SyntaxError - Private static method
console.log(Circle.calculateArea(5))
```

#### 2. Ergonomic brand checks for Private Fields (private 필드에 대한 인체공학적 체크?)
public 필드에 대해, 클래스의 존재하지 않는 필드에 접근을 시도하면 `undefined`가 반환됩니다.<br>
반면에, private 필드는 `undefined`대신 예외를 발생시킵니다. private 필드가 존재하는지 체크하는 방법은 클래스 내에서 접근했을 때 예외를 발생시키는지 여부를 확인하는 것입니다.<br>
하지만, 이 방법은 큰 단점을 가집니다. 존재하는 필드에 대한 잘못된 접근자로 인한 이유처럼 다른 이유로 인해 예외가 발생할 수도 있습니다.

이를 방지하기 위해 `in` 키워드를 사용해 private 속성/메소드를 체크할 수 있습니다.
```javascript
class VeryPrivate {
  constructor() {
    super()
  }

  #variable
  #method() {}
  get #getter() {}
  set #setter(text) {
    this.#variable = text
  }

  static isPrivate(obj) {
    return (
      #variable in obj && #method in obj && #getter in obj && #setter in obj
    )
  }
}
```

#### 4.  RegExp Match Indices
정규식을 사용해 문자열의 패턴을 찾을 수 있습니다.<br>
`Regexp.exec`과 `String.matchAll` 모두 match된 리스트를 결과로 보여줍니다. 전자의 경우, 결과를 하나하나 반환하기 때문에, null이 반환될 때까지 여러 번 실행해야 합니다.<br>
반면에 후자의 경우, 모든 match에 대해 순회할 수 있도록 iterator를 반환합니다. 이러한 결과에는 일치하는 문자의 전체 문자열과 괄호화된 하위 문자열, 입력 문자열 및 일치 항목의 0 기반 인덱스가 모두 포함됩니다. 다음 예시를 확인하세요.
```javascript
const str = 'Ingredients: cocoa powder, cocoa butter, other stuff'
const regex = /(cocoa) ([a-z]+)/g
const matches = [...str.matchAll(regex)]

// 0: "cocoa powder", 1: "cocoa", 2: "powder"
// index: 13
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
console.log(matches[0])


// 0: "cocoa butter", 1: "cocoa", 2: "butter"
// index: 27
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
console.log(matches[1])
```
이러한 결과는 원본 입력에서 전체 일치의 위치에 대해 꽤 많은 정보를 제공하지만 하위 문자열 일치의 인덱스에 대한 정보는 부족합니다.<br>
새로운 `/d` 를 사용하면, 일치한 그룹에 대해 시작, 끝 위치를 얻을 수 있습니다.
```javascript
const str = 'Ingredients: cocoa powder, cocoa butter, other stuff'
const regex = /(cocoa) ([a-z]+)/gd
const matches = [...str.matchAll(regex)]

// 0: "cocoa powder", 1: "cocoa", 2: "powder"
// index: 13
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
// indices: [[13,25],[13,18],[19,25]]
console.log(matches[0])


// 0: "cocoa butter", 1: "cocoa", 2: "butter"
// index: 27
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
// indices: [[27,39],[27,32],[33,39]]
console.log(matches[1])
```

#### 4. Top-level await
이 기능 이전에는, await은 오직 async 함수 내에서만 사용할 수 있었습니다. 이는 모듈 최상단에서 await을 쓸 수 없다는 문제가 존재합니다.<br>
이제 `await`은 모듈 최상단에서 사용할 수 있으며, import, fallback 등을 만들 때 매우 유용합니다.
```javascript
// Before the top-level await, JavaScript would have given you a SyntaxError with this line of code, but that is no more
await Promise.resolve(console.log("🎉"))
```
awaited promise가 해결되기까지, 현재 모듈과 현재 모듈을 import하는 상위 모듈의 실행은 지원하지 않았으나, 형제 모듈은 동일한 순서로 실행될 수 있습니다.

***
양질의 글을 찾아서 번역해 보았다. 자세하게 코드를 다 훑진 않았으나 자바스크립트 생태계를 발전해 나가는 개발자들의 현황을 파악할 수 있는 매우 좋은 글이었다. 나중에 내 코드에서도 써봐야지