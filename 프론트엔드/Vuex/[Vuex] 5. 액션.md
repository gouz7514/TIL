[Vuex 가이드 - 액션](https://vuex.vuejs.org/kr/guide/actions.html)

### 액션
액션은 변이와 유사하지만
- 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 한다
- 임의의 비동기 작업이 포함될 수 있다
```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
액션 핸들러는 저장소 인스턴스의 컨텍스트 객체를 받는다. 그래서, `context.commit`을 호출해 변이를 커밋하거나 상태, getters에 접근할 수 있다.

#### dispatch
액션은 `store.dispatch`로 시작
```javascript
store.dispatch('increment')
```
mutation은 무조건 동기적이어야 하지만 액션은 비동기 작업의 수행이 가능하다
```javascript
actions: {
  incrementAsyn ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

#### payload와 함께 dispatch
```javascript
// 페이로드와 함께 디스패치
store.dispatch('incrementAsync', {
  amount: 10
})
```

#### 객체와 함께 dispatch
```javascript
// 객체와 함께 디스패치
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

### 컴포넌트 내부에서 디스패치 액션 사용하기
`mapActions`를 사용해 컴포넌트에서 액션을 dispatch하거나 컴포넌트 메소드를 `store.dispatch`호출에 매핑할 수 있다.
```javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment' // this.increment()를 this.$store.dispatch('increment')에 매핑
    ]),
    ...mapActions({
      add: 'increment' // this.add()를 this.$store.dispatch('increment')에 매핑
    })
  }
}
```

### 비동기를 이용한 액션 구성
액션 핸들러는 Promise를 반환하므로 체인 형태로 사용이 가능하고 `async/await`의 사용이 가능하다.