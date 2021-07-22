e[Vuex 가이드 - Getters](https://vuex.vuejs.org/kr/guide/getters.html)

### Getters
저장소 상태를 기반하는 상태를 계산해야 하는 경우가 발생할 수 있다.
```javascript
computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}
```
둘 이상의 컴포넌트가 이를 사용해야 하는 경우 함수를 복사하거나 여러 위치에서 가져와야 하는 이상적이지 않은 경우가 발생한다.

이러한 문제점을 Vuex를 사용하면 `getters`를 사용해 해결할 수 있다. `getter`의 결과는 계산된 속성처럼 종속성에 따라 캐쉬되고, 일부 종속성이 변경된 경우에만 다시 재계산 된다.

`Getters`는 첫번째 전달인자로 상태를 받는다.
```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

### 접근하기
#### 속성 유형 접근
getters 는 **`store.getters`** 객체를 통해 해당 값에 접근할 수 있다.
```javascript
store.getters.doneTodos // 결과 : [{ id: 1, text: '...', done: true }]
```

`Getters`는 두 번째 인자로 다른 getter도 받을 수 있다.
```javascript
getters: {
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```
```javascript
store.getters.doneTodosCount // 결과 : 1
```
```javascript
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

#### 메소드 유형 접근
함수를 반환해 getter에 전달인자로 전달할 수도 있다.
```javascript
getters: {
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
```
```javascript
store.getters.getTodoById(2) // 결과 : { id: 2, text: '...', done: false }
```

### `mapGetters`
`mapGetters`는 저장소 getter를 로컬 computed에 매핑한다.
```javascript
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```
다른 이름으로 매핑할 수 있다.
```javascript
...mapGetters([
  doneCount: 'doneTodosCount'
])
```