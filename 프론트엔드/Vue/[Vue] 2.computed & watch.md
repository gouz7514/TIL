템플릿 내에 너무 많은 연산을 넣으면 코드가 복잡해지고 추후에 유지보수도 어렵게 된다.<br>
이를 해결하기 위해 `computed`와 `watch` 속성이 존재한다.<br>
어떤 특성을 갖고 어떻게 다른지 알아본다.
***
### computed
- 의존성과 바인딩
- **종속 대상을 따라 저장된다**
- 계산해야 하는 목표 데이터를 정의하는 방식 => 선언형 프로그래밍
- computed 속성 대신 메소드와 같은 함수를 정의할 수도 있으나 차이점은 **computed 속성은 종속 대상을 따라 저장된다는 것**. 즉, 캐싱을 원하지 않는다면 메소드를 사용하는 것이 더 효율적일 수 있다.

### watch
- 말 그대로 감시자 역할
- 감시할 데이터를 지정하고 그 데이터가 바뀌면 이런 함수를 실행하라는 방식 =? 명령형 프로그래밍

#### 단순 코드 비교
```HTML
<div id="demo">{{ fullName }}</div>
```
```javascript
// watch
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

```javascript
// computed
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```
***
대부분의 경우 computed 속성이 더 적합하지만 사용자가 만든 감시자가 필요한 경우도 있다.<br>
데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우<br>
[vuejs.org guide - watch 속성](https://kr.vuejs.org/v2/guide/computed.html#watch-%EC%86%8D%EC%84%B1)