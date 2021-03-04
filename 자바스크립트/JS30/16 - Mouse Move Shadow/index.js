'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    // 자식 요소가 있으면 target이 바뀌어버림
    if(this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    // 범위가 -50 ~ 50
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    
}

hero.addEventListener('mousemove', shadow);