[Vuex 가이드 - 모듈](https://vuex.vuejs.org/kr/guide/modules.html)

### 모듈
여러 상태를 선언하고 사용하다 보면 저장소가 방대해지고 복잡해져 추후 관리 및 유지보수에 어려움을 겪을 수 있다.<br>
이를 위해 Vuex는 저장소를 모듈로 나눌 수 있다. 각 모듈은 상태, 변이, 액션, 게터 등을 포함할 수 있다.
```javascript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA'의 상태
store.state.b // -> moduleB'의 상태
```

#### 지역 상태 모듈
모듈 변이와 getter 내부에서 첫 번째 전달인자는 모듈의 지역 상태가 된다.
```javascript
const moduleA = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) { // state는 지역 모듈 상태
      state.count++
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```
지역 상태 : `context.state`
루트 상태 : `context.rootState`

#### [네임스페이스](https://vuex.vuejs.org/kr/guide/modules.html#%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3)

기본적으로 모듈 내의 액션, 변이 및 getter는 전역 네임 스페이스 아래에 등록된다.<br>
모듈이 독립적이거나 재사용되기를 원한다면, `namespaced: true`라고 명시하면 된다.

**네임스페이스 모듈 내부에서 전역 자산 접근**
전역 상태, getter를 사용하고자 하면 `rootState`, `rootGetters`를 getter 함수의 3,4번째 인자로 전달해 접근할 수 있다.

전역 네임스페이스의 액션을 디스패치하거나 변이를 커밋하려면 `dispatch`와 `commit`에 3번째 인자로 `{ root: true }`를 전달하면 된다.

**네임스페이스 모듈 내부에서 전역 액션 등록**
액션 내부에 `root: true`를 표시하고 handler에 액션 정의

**헬퍼에서 네임스페이스 바인딩 (링크 참고)**
장황해지는 것을 방지하기 위해 `createNamespacedHelpers`를 사용해 모듈 경로를 미리 바인딩해 헬퍼에서 사용할 수 있다.

#### 동적 모듈 등록
동적 모듈 등록을 사용하면 다른 Vue 플러그인도 애플리케이션의 저장소에 모듈을 연결해 상태 관리에 Vuex를 활용할 수 있다.

#### 모듈 재사용
일반 객체를 사용해 모듈을 선언하면 상태 객체가 참조에 의해 공유되고 변이될 때 상태의 변질을 발생시킬 수 있다.<br>
이를 해결하기 위해 함수를 사용해 모듈 상태를 선언한다.
```javascript
const MyReusableModule = {
  state: () => ({
    foo: 'bar'
  })
  // ...
}
```