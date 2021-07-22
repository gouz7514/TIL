[Vuex 가이드 - 상태](https://vuex.vuejs.org/kr/guide/state.html)
### 상태
Vuex는 단일 상태 트리를 사용한다. 즉, 각 애플리케이션마다 하나의 저장소만 갖게 된다.

#### Vuex 상태를 Vue 컴포넌트에서 가져오기
Vuex 저장소는 반응적이기 때문에 `computed`를 사용해 일부 저장소 상태를 가져올 수 있다.

```javascript
// App.vue 에서 속성 가져오기
export default {
    name: 'App',
    ...
    
    computed: {
    	counter() {
        	return this.$store.state.counter
        }
    }
}
```
`store.state.counter`가 변경되면 계산된 속성이 변경되소 관련 DOM 업데이트가 트리거된다.

Vuex는 `store`옵션을 통해 루트 컴포넌트의 모든 자식 컴포넌트에 저장소를 주입하는 매커니즘을 제공한다.

#### `mapState`
컴포넌트가 여러 저장소 상태 속성이나 getter를 사용해야하는 경우 계산된 속성을 모두 선언하면 코드가 복잡하고 장황해진다.
이를 처리하기 위해 `mapState` 헬퍼를 사용한다. `mapState`는 상태를 끌어와 사용할 수 있게 한다.

```javascript
import { mapState } from 'vuex'

export default {
    computed: mapState({
        counter: state => state.counter,
        countPlusLocalState (state) {
            return state.count + this.localCount
        }
    })
}
```

**스프레드 연산자를 사용해 문법을 단순화 할 수 있다.**
```javascript
computed: {
    ...mapState(['counter'])
    // return this.$store.state.counter 를 대신함
}
```