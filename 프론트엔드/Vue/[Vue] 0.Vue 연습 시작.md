[Vue.js 시작하기](https://kr.vuejs.org/v2/guide/index.html)
***
### 1. 선언적 렌더링
```html
<div id="app">
  <p>{{ message }}</p>
</div>
```
```javascript
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
```

### 2. 엘리먼트 속성 바인딩
```html
<div id="app-2">
  <span v-bind:title="message">
    hover mouse to see binded title!
  </span>
</div>
```

```javascript
let app2 = new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는 ' + new Date()+ '에 로드되었습니다.'
  }
})
```
**디렉티브**
Vue에서 제공하는 특수 속성임을 나타내는 `v-` 접두어가 붙어있으며 렌더링된 DOM에 특수한 반응형 동작을 한다.

### 3. 조건문과 반복문
**조건문**
```html
<div id="app-3">
  <p v-if="seen">now you can see me</p>
</div>
```
```javascript
let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

**반복문**
```html
<div id="app-4">
  <ul>
    <li v-for="todo in todos">{{todo.text}}</li>
  </ul>
</div>
```
```javascript
let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: '김학재'},
      {text: '26세'},
      {text: '프론트엔드 개발자'}
    ]
  }
})
```

### 4. 사용자 입력 핸들링
`v-on` 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트 리스너를 추가
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>
```
```javascript
let app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
***
`v-model` 디렉티브를 사용해 양식에 대한 입력과 앱 상태를 양방향으로 바인딩
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```javascript
let app6 = new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
})
```
### 5. 컴포넌트를 사용한 작성법
```html
<div id="app-7">
  <ol>
    <!-- 각 todo-item에 todo 객체를 제공 -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```
```javascript
// 컴포넌트를 사용한 작성방법
// todo-item 이름을 가진 컴포넌트를 정의
Vue.component('todo-item', {
  // todo라는 이름의 props를 입력받음
  props:['todo'],
  template: '<li>{{todo.text}}</li>'
})

let app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id:0, text:'Vegetables'},
      {id:1, text:'Cheese'},
      {id:2, text:'Whatever else that human can eat'}
    ]
  }
})
```