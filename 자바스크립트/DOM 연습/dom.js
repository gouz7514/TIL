'use strict';

// 참고 링크 : https://poiemaweb.com/js-dom

// const elem = document.getElementById('one');
// // 클래스 어트리뷰트의 값을 변경한다.
// elem.className = 'blue';

// // 그림: DOM tree의 객체 구성 참고
// console.log(elem); // <li id="one" class="blue">Seoul</li>
// console.log(elem.__proto__);           // HTMLLIElement
// console.log(elem.__proto__.__proto__); // HTMLElement
// console.log(elem.__proto__.__proto__.__proto__);           // Element
// console.log(elem.__proto__.__proto__.__proto__.__proto__); // Node

// // CSS 셀렉터를 이용해 요소를 선택한다
// const elem = document.querySelector('li.red');
// // 클래스 어트리뷰트의 값을 변경한다.
// elem.className = 'blue';

// HTMLCollection을 반환한다. HTMLCollection은 live하다.
// const elems = document.getElementsByClassName('red');

// for (let i = 0; i < elems.length; i++) {
//   // 클래스 어트리뷰트의 값을 변경한다.
//   elems[i].className = 'blue';
// }

// console.log(elems);
// 위 코드는 제대로 동작하지 않음

// const elems = document.getElementsByClassName('red');

// // 유사 배열 객체인 HTMLCollection을 배열로 변환한다.
// // 배열로 변환된 HTMLCollection은 더 이상 live하지 않다.
// console.log([...elems]); // [li#one.red, li#two.red, li#three.red]

// [...elems].forEach(elem => elem.className = 'blue');

// const elem = document.querySelector('#two');

// elem.parentNode.className = 'blue';

// const elem = document.querySelector('ul');

// first Child
// elem.firstChild.className = 'blue';
// // last Child
// elem.lastChild.className = 'blue';
// 위 코드는 제대로 동작 X. 요소 사이의 공백 또는 줄바꿈 문자를 텍스트 노드로 취급한다.

// first Child
// elem.firstElementChild.className = 'blue';
// // last Child
// elem.lastElementChild.className = 'blue';

// const elem = document.querySelector('ul');

// if (elem.hasChildNodes()) {
//   console.log(elem.childNodes);
//   // 텍스트 요소를 포함한 모든 자식 요소를 반환한다.
//   // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text]

//   console.log(elem.children);
//   // 자식 요소 중에서 Element type 요소만을 반환한다.
//   // HTMLCollection(4) [li#one.red, li#two.red, li#three.red, li#four, one: li#one.red, two: li#two.red, three: li#three.red, four: li#four]
//   [...elem.children].forEach(el => console.log(el.nodeType)); // 1 (=> Element node)
// }

// const elem = document.querySelector('ul');

// elem.firstElementChild.nextElementSibling.className = 'blue';
// elem.firstElementChild.nextElementSibling.previousElementSibling.className = 'blue';

// 해당 텍스트 노드의 부모 요소 노드를 선택한다.
// const one = document.getElementById('one');
// console.dir(one); // HTMLLIElement: li#one.red

// // nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
// console.log(one.nodeName); // LI
// console.log(one.nodeType); // 1: Element node

// // firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
// const textNode = one.firstChild;

// // nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
// console.log(textNode.nodeName); // #text
// console.log(textNode.nodeType); // 3: Text node

// // nodeValue 프로퍼티를 사용하여 노드의 값을 취득한다.
// console.log(textNode.nodeValue); // Seoul

// // nodeValue 프로퍼티를 이용하여 텍스트를 수정한다.
// textNode.nodeValue = 'Pusan';

// const elems = document.querySelectorAll('li');

// // className
// [...elems].forEach(elem => {
//   // class 어트리뷰트 값을 취득하여 확인
//   if (elem.className === 'red') {
//     // class 어트리뷰트 값을 변경한다.
//     elem.className = 'blue';
//   }
// });

// // classList
// [...elems].forEach(elem => {
//   // class 어트리뷰트 값 확인
//   if (elem.classList.contains('blue')) {
//     // class 어트리뷰트 값 변경한다.
//     elem.classList.replace('blue', 'red');
//   }
// });

// h1 태그 요소 중 첫번째 요소를 취득
// const heading = document.querySelector('h1');

// console.dir(heading); // HTMLHeadingElement: h1
// console.log(heading.firstChild.nodeValue); // Cities

// // id 어트리뷰트의 값을 변경.
// // id 어트리뷰트가 존재하지 않으면 id 어트리뷰트를 생성하고 지정된 값을 설정
// heading.id = 'heading';
// console.log(heading.id); // heading

const $password = document.querySelector('.password');
const $show = document.querySelector('.show');

function makeClickHandler() {
  let isShow = false;
  return function () {
    $password.setAttribute('type', isShow ? 'password' : 'text');
    isShow = !isShow;
    $show.innerHTML = isShow ? 'hide' : 'show';
  };
}

$show.onclick = makeClickHandler();