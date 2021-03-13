**의존성.**<br>
단어 자체는 어려운 단어가 아닌데 왜 프로그래밍에서는 이렇게 난해한 개념인지를 모르겠다.<br>
해서, 의존성이 무엇인지 알아보고 어떤 방식으로 의존성을 주입(DI : Dependency Injection) 하는지 정리해보기로 했다.
***
### 의존성
말 그대로 의존성이다. 어떤 객체의 사용에 있어 다른 객체에게 의존한다는 것이다.<br>
```java
class A {
    private B b;
    
    public A() {
    	b = new B();
    }
}
```
 &nbsp;위 코드에서는 A 클래스 내의 **A 생성자에서 B 클래스의 객체를 생성해서 사용**한다.<br>
 즉, A 클래스는 B 클래스에 의존하게 된다.<br>
 &nbsp;이렇게 설계된 코드는 재활용성도 떨어지고, B 클래스의 변경이 필요한 경우 A 클래스도 함께 수정해야 한다.
 
 ```java
 class A {
     private B b;
     
     public A() { }
     
     public void setB(B b) {
         this.b = b;
     }
 }
 ```
 위와 같이 의존 관계가 아닌 `setB(B b)`와 같이 **주입을 통해 객체 간의 결합도를 낮추는게 가능**하다.<br>
 이를 **DI, 의존성 주입**이라고 한다.

### DI 방식
#### Setter를 사용하는 방식
```java
B b = new B();
A a = new A();
a.setB(b);
```

#### 생성자를 사용하는 방식
```java
B b = new B();
A a = new A(b);
```

스프링에서는 생성자를 사용하는 방식을 권장하고 있다.<br>
`final` 키워드를 통해 객체가 불변하도록 할 수 있으며, 디자인 패턴이 좋은지 나쁜지를 판단할 수 있다.<br>
또한 의존성의 순서도 보장된다.
***
처음에는 난해하기만 했던 용어들이 이제 조금씩 와닿는 느낌이다😁

참고 자료 : [[Spring]필드 주입(Field Injection) 대신 생성자 주입(Constructor Injection)을 사용해야 하는 이유](https://zorba91.tistory.com/238)