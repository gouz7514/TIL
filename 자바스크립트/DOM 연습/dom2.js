'use strict';

// const ul = document.querySelector('ul');

// // 요소의 텍스트 취득
// console.log(ul.textContent);
// /*
//         Seoul
//         London
//         Newyork
//         Tokyo
// */

// const one = document.getElementById('one');

// // 요소의 텍스트 취득
// console.log(one.textContent); // Seoul

// // 요소의 텍스트 변경
// one.textContent += ', Korea';

// console.log(one.textContent); // Seoul, Korea

// // 요소의 마크업이 포함된 콘텐츠 변경.
// one.textContent = '<h1>Heading</h1>';

// // 마크업이 문자열로 표시된다.
// console.log(one.textContent); // <h1>Heading</h1>

// const ul = document.querySelector('ul');

// // innerHTML 프로퍼티는 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다. 이 문자열은 마크업을 포함한다.
// console.log(ul.innerHTML);

// const one = document.getElementById('one');

// // 마크업이 포함된 콘텐츠 취득
// console.log(one.innerHTML); // Seoul

// // 마크업이 포함된 콘텐츠 변경
// one.innerHTML += '<em class="blue">, Korea</em>';

// // 마크업이 포함된 콘텐츠 취득
// console.log(one.innerHTML); // Seoul <em class="blue">, Korea</em>

// 태그이름을 인자로 전달하여 요소를 생성
// const newElem = document.createElement('li');
// // const newElem = document.createElement('<li>test</li>');
// // Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('<li>test</li>') is not a valid name.

// // 텍스트 노드를 생성
// const newText = document.createTextNode('Beijing');

// // 텍스트 노드를 newElem 자식으로 DOM 트리에 추가
// newElem.appendChild(newText);

// const container = document.querySelector('ul');

// // newElem을 container의 자식으로 DOM 트리에 추가. 마지막 요소로 추가된다.
// container.appendChild(newElem);

// const removeElem = document.getElementById('one');

// // container의 자식인 removeElem 요소를 DOM 트리에 제거한다.
// container.removeChild(removeElem);

const one = document.getElementById('one');

// 마크업이 포함된 요소 추가
one.insertAdjacentHTML('beforeend', '<em class="blue">, Korea</em>');