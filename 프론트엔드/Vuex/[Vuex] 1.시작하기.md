[vuex 시작하기](https://vuex.vuejs.org/kr/guide/)
이번 한 달의 목표는 vuex 내용 숙지하기!
***
모든 Vuex 애플리케이션의 중심에는 `store`가 있다. `store`는 기본적으로 애플리케이션의 상태를 보유하는 컨테이너이며 다음과 같은 특징을 갖는다.

> 1. Vuex store는 반응형이다. Vue 컴포넌트는 상태를 검색할 때 저장소의 상태가 변경되면 효율적으로 대응하고 업데이트한다.
2. 저장소의 상태를 직접 변경할 수 없다. 저장소의 상태를 변경하는 유일한 방법은 명시적인 **커밋을 이용한 변이**이다.

간단한 카운터 애플리케이션의 생성을 통해 Vuex 사용법을 익혀보자.

### 저장소 만들기
store 폴더를 생성한 뒤 `index.js` 파일을 작성한다.
```javascript
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  }
})
```
> `createStore`를 통해 store 생성
state에 counter라는 상태 저장
mutation에 increment, decrement 선언

이제 `state` 객체에 `store.state`로 접근하여 `store.commit` 메소드로 상태 변경을 트리거할 수 있다.
```javascript
store.commit('increment')

or

this.$store.commit('increment')
```
`store.state.count`를 직접 변경하는 대신 mutation을 통해 명시적으로 추적을 한다.