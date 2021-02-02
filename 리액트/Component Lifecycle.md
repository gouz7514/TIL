컴포넌트는 그 활용에 있어 여러 생명주기를 갖는다.
사용자는 이 생명주기들의 메서드를 오버라이딩해 특정 시점에 특정 동작이 실행되도록 구현할 수 있다.

![React Component Lifecycle](https://images.velog.io/images/gouz7514/post/1a964693-dd5b-49e2-ae52-e0e82ed95bc6/image.png)
### Mount
**constructor()**
컴포넌트가 새로 만들어지면 호출되는 생성자 메서드이다.
constructor를 구현 시에는 `super()`를 먼저 호출해야 한다.

**render()**
클래스 컴포넌트를 UI 상에 나타낸다.
Update나 Mount시에 호출된다.

**componentDidMount()**
컴포넌트가 Mount되어서 DOM tree에 삽입되면 호출된다.

### Update
**render()**

**componentDidUpdate()**
컴포넌트의 업데이트가 발생하여 rerendering이 완료되면 호출되는 메서드이다.
때문에 여기서는 `setState`를 사용해선 안된다.
> **setState를 사용해서는 안 되는 이유**
React에서 state값을 변경하기 위해서 setState를 사용하는데 setState는 render를 호출한다.
<br>
즉, componentDidUpdate에서 setState를 사용하게 되면 `update` → `render` → `update` ··· 의 무한 루프가 발생하게 된다.

### Unmount
**componentWillUnmount()**
컴포넌트가 unmount되고 사라질 때 호출된다.
***
API를 통해 데이터를 가져오거나 다양한 기능 구현 시에 LifeCycle 메서드를 잘 구현해야겠다.