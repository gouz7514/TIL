앞서 리액트의 가장 큰 특징 중 하나가 `리액트는 컴포넌트 기반 라이브러리`라는 것이었다.
컴포넌트가 무엇인지, 어떻게 사용하는지 알아보자

### Component
[React document - components & props](https://ko.reactjs.org/docs/components-and-props.html)
컴포넌트는 자바스크립트의 함수와 유사하며 `props`라는 입력을 받아 화면에 나타낼 React element를 return한다.
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
보통 위와 같이 Component를 정의하며 `props` 객체 인자를 받아 return한다.

### Component 렌더링 (props)
React elemnt는 다음과 같이 사용자가 정의할 수 있다.
```javascript
const element = <Welcome name="Sara" />;
```
이렇게 사용자가 정의한 엘리먼트는 `props`라는 이름으로 해당 컴포넌트(여기서는 Welcome)으로 전달된다.
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
>
1. `<Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출합니다.`
2. `React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출합니다.`
3. `Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환합니다.`
4. `React DOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트합니다.`

또한, 동일한 컴포넌트를 반복적으로 사용할 수 있다.
```javascript
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```
***
### 연습
```javascript
import React from 'react';

function Food({fav}) {
  return <h1>I love {fav}</h1>
}

function App() {
  return (
    <div className="App">
      HELLO!
      <Food fav="kimchi" />
      <Food fav="chicken" />
      <Food fav="pizza" />
    </div>
  );
}

export default App;
```
Food Component에 `fav`라는 `props`를 전달하고,
Food component에서는 `{fav}`를 통해 `props.fav`를 바로 사용한다.

결과는 아래와 같다.
![출력 결과](https://images.velog.io/images/gouz7514/post/ffca4eff-4b34-4474-b61c-bc4f3d294a44/image.png)