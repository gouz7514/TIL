[Vuex가 무엇인가요?](https://vuex.vuejs.org/kr/)
***
Vuex는 Vue.js 애플리케이션에 대한 **상태 관리 패턴 + 라이브러리**<br>
애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있다.

### 상태 관리 패턴이란?
![단방향 데이터 흐름](https://images.velog.io/images/gouz7514/post/09dedd4e-19f3-4860-883a-2cc938bf95cc/image.png)

- **상태** : 앱을 작동하는 원본 소스
- **뷰** : 상태의 선언적 매핑 
- **액션** : 뷰에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법


```javascript
// 간단한 Vue 카운터 앱
new Vue({
  // 상태
  data () {
    return {
      count: 0
    }
  },
  // 뷰
  template: `
    <div>{{ count }}</div>
  `,
  // 액션
  methods: {
    increment () {
      this.count++
    }
  }
})

```

그러나 공통의 상태를 공유하는 여러 컴포넌트가 있는 경우 문제가 발생하는데 이를 해결하기 위해 컴포넌트에서 공유된 상태를 추출하고 이를 전역 싱글톤으로 관리해야 한다.<br>
이를 통해 컴포넌트 트리는 커다란 "뷰"가 되며 모든 컴포넌트는 트리에 상관없이 상태에 액세스하거나 동작을 트리거할 수 있다.

![Vuex 동작 원리](https://images.velog.io/images/gouz7514/post/68f0624a-a906-436b-ac59-7b2c6a88046e/image.png)
***
