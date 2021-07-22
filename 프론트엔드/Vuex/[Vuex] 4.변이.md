[Vuex 가이드 - 변이](https://vuex.vuejs.org/kr/guide/mutations.html)

### 변이
Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법은 변이하는 것이다. 각 변이에는 타입 문자열 **핸들러**가 있으며, 핸들러 함수는 첫번째 전달인자로 상태를 받는다.
```javascript
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```
변이 핸들러의 호출은 아래와 같다.
```javascript
store.commit('increment')
```

#### payload를 가진 commit
변이에 대해 `payload`라고 하는 추가 전달인자를 `store.commit에 사용할 수 있다.
```javascript
mutations: {
  increment (state, n) {
    state.count += n
  }
}
```
```javascript
store.commit('increment', 10)
```
`payload`는 객체인 경우가 대부분이며 아래와 같이 가독성을 높일 수 있다.
```javascript
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```
```javascript
store.commit('increment', {
  amount: 10
})
```

#### 객체 스타일 commit
```javascript
store.commit({
  type: 'increment',
  amount: 10
})
```
***
#### Vue의 반응성 규칙을 따르는 변이
Vuex 저장소의 상태는 Vue에 의해 반응하므로, 상태를 변경하면 상태를 관찰하는 Vue 컴포넌트가 자동으로 업데이트된다.
>
- 원하는 모든 필드에 앞서 저장소를 초기화하는 것이 좋다.
- 객체에 새 속성을 추가할 때는
	1. `Vue.set(obj, 'newPorp', 123)`을 사용하거나
    2. 객체를 새로운 것으로 교체
```javascript
state.obj = {...state.obj, newProp: 123}
```

#### 변이 타입에 상수 사용
변이 유형에 상수를 사용해 단일 파일에 저장하면 협업 시 파악하기 용이하다
```javascript
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
```
```javascript
// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    [SOME_MUTATION] (state) {
      // 변이
    }
  }
})
```

### 변이는 무조건 동기적이어야 한다
디버깅 시에 비동기 콜백이 호출되는 시기를 devtool이 알 수 없다.
콜백에서 수행된 모든 상태 변이는 본질적으로 추적할 수 없다. (추가 공부 필요)

### `mapMutations`
```javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment' // this.increment()를 this.$store.commit('increment')에 매핑
    ]),
    ...mapMutations([
      add: 'increment' // this.add()를 this.$store.commit('increment')에 매핑
    ])
  }
}
```
***
비동기성이 상태의 변이와 결합되면 콜백 메소드를 호출하는 시점과 호출 된 콜백의 정확한 시점을 파악하기 어렵다. 이를 해결하기 위해 **액션**이 존재한다.