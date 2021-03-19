### CSS3
차세대 HTML5와 함께 등장한 새로운 스타일. 차세대 웹 개발을 위한 새로운 표준<br>
신 기능 : 다중 컬럼 레이아웃, 텍스트효과 및 블럭효과, 시범적용 위해 접두사 사용(webkit 등)
***
### `class`와 `id`의 차이점
`id`는 유일한 요소에 적용할 때, `class`는 복수의 요소에 적할 때<br>
***
### `float`가 어떻게 동작하나?
[https://developer.mozilla.org/ko/docs/Web/CSS/float](https://developer.mozilla.org/ko/docs/Web/CSS/float)<br>
`float` 속성은 현재 위치의 왼쪽이나 오른쪽으로 shift되어 배치되는 박스의 일종.<br>
이 때 컨텐츠는 float 속성이 적용된 요소의 주변에 위치함
***
### 클리어링에는 어떤 것들이 있으며, 각각은 어떨 때 사용?
[https://developer.mozilla.org/ko/docs/Web/CSS/clear](https://developer.mozilla.org/ko/docs/Web/CSS/clear)<br>
float 속성의 영향에서 벗어나기 위해 사용하는 clear 속성은 float의 특성을 지워주는 역할을 한다.<br>
총 4가지 값이 있는데 both는 양 쪽의 float 속성을 지워주며, left와 right는 각각 왼쪽, 오른쪽 속성을 지워주고 none은 기본 값으로 아무 것도 지워주지 않는다. 보통은 float 속성을 감싸고 있는 요소들의 height를 조정하기 위해 사용된다.
***
### CSS 전처리기의 장/단점
CSS 문서의 작성에 도움을 주는 도구
#### 장점
- CSS의 유지보수성이 향상.
- 중첩 선택자를 작성하기 쉬움.
- 일관된 테마를 위한 변수사용. 여러 프로젝트에 걸쳐 테마 파일을 공유 가능.
- 반복되는 CSS를 위한 Mixins 생성.
- 코드를 여러 파일로 나눈다. CSS 파일도 나눌 수 있지만, 그렇게 하기 위해서는 각 CSS 파일을 다운로드하기 위한 HTTP 요청이 필요.
#### 단점
- 전처리기를 위한 도구가 필요. 웹에서는 CSS만 동작하기 때문에 전처리기는 직접 동작시킬 수가 없다. 따라서 CSS로 컴파일 후 동작시켜야 한다.
***
### CSS 선택자 동작 원리
선택자는 크게 네 가지가 있다. id, class, tag 그리고 *(universal).<br>
스타일 엔진은 키 셀렉터로부터 시작하여 왼쪽으로 이동하면서 엘리먼트가 규칙에 적합한지 확인한다. 만약 엘리먼트가 이 규칙에 적합하거나 적합하지 않다는게 확인되면 멈춘다.
***
### box model
box model은 각각의 Object를 박스 형태로 나타내어 브라우저에 배치하기 위한 규칙.<br>
**W3C 박스 모델** : content-box로 width가 content만 포함<br>
**IE 박스 모델** : border-box로 width에 content, padding, border를 모두 포함<br>
***
### display의 속성
- `block`<br>
항상 새로운 라인에 요소가 시작되고 화면 크기의 전체 가로폭을 영역으로 차지한다. width 속성 값을 부여해주면 그 너비만큼 영역을 차지한다.
- `inline`<br>
새로운 라인에서 시작되지 않으며 다른 요소들과 같은 줄에 배치될 수 있고 content 너비만큼의 영역을 차지한다. 그리고 width, height, margin-top, margin-bottom 속성이 적용이 되지 않는다.
- `inline-block`<br>
block 레벨 요소와 inline 레벨 요소의 특징을 모두 가지고 있다. 한 줄에서 inline 레벨 요소들과 같이 배치될 수 있으며 width와 height 속성으로 영역의 크기를 지정할 수 있다.
- `none`<br>
선택한 요소들을 화면에 나타나지 않게 한다. `visibility: hidden`과의 차이점은 영역이 남아있는지 여부가 다르다는 점이다.(display: none은 영역도 없앰) `display:none`은 screen reader 사용자를 위해 사용 금지
***
### 요소를 배치하는 방법
- `static` : 기본값으로 요소들이 겹치지 않고 상→하로 배치된다.
- `relative` : 원래 배치되어야 할 위치에서 지정한 값 만큼 떨어진 곳에 요소를 배치한다.
- `fixed` : 웹 브라우저 화면 전체를 기준으로 배치한다. 스크롤을 하더라도 위치가 고정된다.
- `absolute` : 가장 가까운 상위 요소의 위치를 기준으로 지정한 값 만큼 떨어진 곳에 요소를 배치한다.
***
### flex를 사용하는 이유
flex는 레이아웃을 좀 더 편하게 잡기 위해 만들어진 CSS 속성. 요소들의 크기나 위치를 쉽게 잡을 수 있다.<br>
flex는 컨테이너와 아이템 개념을 사용해 요소의 크기가 불분명하거나 동적인 경우에도 요소를 효율적으로 정렬할 수 있다.<br>
***
