[vuejs.org - Vue 인스턴스](https://kr.vuejs.org/v2/guide/instance.html)
***
**모든 Vue 앱은 `Vue` 함수로 새 인스턴스를 만드는 것부터 시작**
```javascript
let vm = new Vue({
  // 옵션
})
```
Vue 인스턴스의 생성 시에는 **options 객체**를 전달해야 한다.

### 데이터와 메소드
Vue 인스턴스가 생성될 때 **데이터 객체**에 있는 모든 속성이 Vue의 반응형 시스템에 추가된다. 각 속성값이 변경될 때 뷰가 반응하여 새로운 값과 일치하도록 업데이트된다.
```javascript
// 데이터 객체
let data = { a: 1};

// Vue 인스턴스에 데이터 객체 추가
let vm = new Vue({
  data: data;
})

// 인스턴스에 있는 속성은 원본 데이터의 값 반환
vm.a ==== data.a // 결과 : true

// 인스턴스의 속성값을 변경하면 원본 데이터에도 영ㅇ향
vm.a = 2;
console.log(data.a); // 결과 : 2

// 반대도 마찬가지
data.a = 3;
console.log(vm.a); // 결과 : 3
```

데이터가 변경되면 화면은 다시 렌더링된다.
여기서 주의할 점은 `data`에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 **반응형**이라는 점. 즉, 새 속성을 추가하고 변경하여도 화면이 갱신되지 않는다.

추후에 필요한 속성이지만 빈 값이거나 존재하지 않은 상태로 시작한다면 초기값을 지정해야 한다.
```javascript
// 초기값 지정 예시
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

`Object.freeze()`를 사용해 기존 속성의 변경을 막아 반응성 시스템의 추적을 방지할 수 있다. 이 경우, 속성값을 변경할 경우 에러 발생


> #### 연습
```html
<!-- index.html -->
<div id="app-8">
  <p>{{ kim.age }}</p>
</div>
```
```javascript
// index.js
let kim = {age:26};
let vm = new Vue({
  el: '#app-8',
  data: {
    kim
  }
})
// 속성값 변경
kim.age = 30;
vm.kim.age = 40;
```

Vue 객체를 생성할 때 아래와 같이 data, template, el, methods, life cycle hook 등의 인스턴스 옵션 속성을 포함할 수 있다.

다른 사용자 정의 속성과 구분하기 위해 `$` 접두어를 붙임.
[Vue API - 인스턴스 속성](https://kr.vuejs.org/v2/api/#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%86%8D%EC%84%B1)
```javascript
let data = { a:1};
let vm = new Vue({
  el: '#exmaple',
  data : data
})

vm.$data === data // 결과 : true
vm.$el === document.getElementById('example') // 결과 : true
```
***
### 인스턴스 라이프사이클 훅
각 인스턴스는 생성될 때 일련의 초기화 단계를 거친다. 이 과정에서 사용자 정의 로직을 실행할 수 있는 라이프사이클 훅도 호출된다. `created` 훅은 인스턴스가 생성된 후에 호출
![Vue 인스턴스 라이프사이클](https://kr.vuejs.org/images/lifecycle.png)
```javascript
new Vue({
  data: {
    a: 1
  },
  created: function() {
    // this는 vm 인스턴스를 가리킵니다.
    cosnole.log('a is ' + this.a); // 결과: a is 1
  }
})
```
모든 라이프사이클 훅은 `this`가 호출하는 Vue 인스턴스를 가리키며 호출된다. 